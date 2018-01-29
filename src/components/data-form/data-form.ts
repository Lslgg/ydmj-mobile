import {
  Component, OnInit, Input, EventEmitter,
  AfterViewInit, Output, ContentChildren, QueryList, Inject
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

import { FmItemComponent } from './components/fm-item';

@Component({
  selector: 'data-form',
  templateUrl: 'data-from.html'
})

export class DataFormComponent {

  @Input() formInfo: FormGroup;

  //是否自动
  @Input() isAuto: boolean = true;
  @Output() onSubmit = new EventEmitter<any>();

  //操作项
  @Input() dataStr: FormStr;

  //表单项
  @ContentChildren(FmItemComponent) flist: QueryList<FmItemComponent>;

  //表单中要保存的字段
  savefieldList: Array<string> = [];

  id: string;

  constructor(private fb: FormBuilder, private apollo: Apollo) {

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
      if (this.id) {
        var queryInfo: any = {
          query: this.dataStr.data,
          variables: { id: this.id },
          fetchPolicy: "network-only"
        };
        var data = await this.apollo.query<{ info: any }>(queryInfo).toPromise();
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
  }

  async submit() {
    var formObj = this.formInfo.value;
    var keys = Object.keys(formObj);
    formObj = this.setInfo(keys, formObj);
    //设置修改和添加的参数和方法id不为空为修改反之修改
    if (this.id) {
      Object.assign(formObj, { id: this.id });
    }
    //自动保存
    if (this.isAuto) {
      this.apollo.mutate({
        mutation: this.dataStr.save,
        variables: { info: formObj },
        update: (proxy, { data }) => { }
      }).subscribe(({ data }) => {
        alert(data ? "操作成功！" : "操作失败！");
        // this.router.navigate([this.dataStr.url]);
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