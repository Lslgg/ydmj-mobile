import {
  Component, Input, EventEmitter, Output, ContentChildren, QueryList
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Apollo } from 'apollo-angular';

import { FmItemComponent } from './components/fm-item';
import { FmGroupComponent } from './components/fm-group';
import { NavController, ToastController } from 'ionic-angular';


@Component({
  selector: 'data-form',
  templateUrl: 'data-form.html'
})

export class DataFormComponent {

  @Input() formInfo: FormGroup;

  //是否自动
  @Input() isAuto: boolean = true;
  @Output() onSubmit = new EventEmitter<any>();

  //操作项
  @Input() dataGql: FormGql;

  @Input() butTitle: string = "保存";

  //表单项
  @ContentChildren(FmItemComponent) flist: QueryList<FmItemComponent>;
  @ContentChildren(FmGroupComponent) fgroup: QueryList<FmGroupComponent>;


  //表单中要保存的字段
  savefieldList: Array<string> = [];

  id: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController,
    private apollo: Apollo) {

  }

  async ngAfterContentInit() {
    this.savefieldList = [];
    this.flist.forEach(self => {
      self.formInfo = this.formInfo;
      self.ngAfterContentInit();
    });

    //如果是自动加载查找给值
    this.id = "";// this.route.snapshot.params['id'];
    let val = {};
    if (this.isAuto) {
      if (this.id && this.dataGql.data) {
        var query: any = {
          query: this.dataGql.data,
          variables: { id: this.id },
          fetchPolicy: "network-only"
        };
        var data = await this.apollo.query<{ info: any }>(query).toPromise();
        val = data.data.info;
      }
    }

    //给表单值并且记录要保存的字段
    this.flist.forEach(p => {
      p.setFormVale(val);
      //如果这个字段要保存添加到列表
      if (p.isSaveField) {
        this.savefieldList.push(p.name);
      }
    });

    this.fgroup.forEach(self =>
      self.flist.forEach(p => {
        p.setFormVale(val);
        //如果这个字段要保存添加到列表
        if (p.isSaveField) {
          this.savefieldList.push(p.name);
        }
      }));
  }

  async submit() {
    var formObj = this.formInfo.value;
    var keys = Object.keys(formObj);
    formObj = this.setInfo(keys, formObj);
    //id不为空为修改
    if (this.id) {
      Object.assign(formObj, { id: this.id });
    }
    //自动保存
    if (this.isAuto) {
      const mutate = {
        mutation: this.dataGql.save,
        variables: { info: formObj }
      };
      this.apollo.mutate(mutate).subscribe(({ data }) => {
        const maseeage = data ? "操作成功！" : "操作失败！";
        let toast = this.toastCtrl.create({
          message: maseeage, showCloseButton: true,
          duration: 2000, position: "top"
        });
        toast.present();
        this.navCtrl.push(this.dataGql.url)
      })
    }
    console.log(formObj);
    this.onSubmit.emit(formObj);
  }

  //获取对像里面的值
  private setInfo(keyList: Array<string>, obj: object): object {
    var saveInfo: Object = {};
    let setSaveField = (keyList, obj) => {
      for (var i = 0, j = keyList.length; i < j; i++) {
        var self = keyList[i];
        var info = obj[self];
        if (typeof info == "object" && info != null) {
          if (info instanceof Date) { //如果为日期
            info = ""; //this.cdate.toDateFormat((<Date>info));
          } else {
            var subKeys = Object.keys(info);
            if (subKeys.length > 0) {
              setSaveField(subKeys, info)
            }
          }
        }
        var index = this.savefieldList.indexOf(self) > -1;
        if (index) {
          saveInfo[self] = info;
        }
      }
    }
    setSaveField(keyList, obj);
    return saveInfo;
  }

}