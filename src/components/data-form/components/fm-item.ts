import {
    Component, Input, EventEmitter, Output,
    ContentChildren, QueryList, AfterViewInit
} from '@angular/core';

import { FormGroup } from '@angular/forms';

import { FmVerifyComponent } from './fm-verify';

@Component({
    selector: 'fm-item',
    templateUrl: 'fm-item.html'
})

export class FmItemComponent implements AfterViewInit {

    //字段名
    @Input() name: string;

    //字段标题
    @Input() title: string;

    //字段类型
    @Input() type: string = "text";

    //字段是否保存
    @Input() isSaveField: boolean = true;

    //表单组
    @Input() formInfo: FormGroup;

    @Input() dataList: Array<{ key: string, value: string }> = [];

    @Input() datevalue: Date = new Date();

    @Input() files: Array<any> = new Array<any>();

    @Output() onChange = new EventEmitter<any>();

    @Input() editorContent = "";

    @Input() verify:string;

    @ContentChildren(FmVerifyComponent) fmVerifyList: QueryList<FmVerifyComponent>;

    constructor() {

    }


    ngAfterViewInit() {
     
    }


    change(info) {
        this.onChange.emit(info.value);
    }


    //添加上传文件id到隐藏文本上
    onFileChange(fileIdList: Array<string>) {
        this.formInfo.get(this.name).setValue(fileIdList);
    }

    //删除隐藏文本字段的文件id
    onDeleteFile(fileIdList: Array<string>) {
        this.formInfo.get(this.name).setValue(fileIdList);
    }

    ngAfterContentInit() {
        this.fmVerifyList.forEach(val => {
            val.formInfo = this.formInfo;
            val.formTitle=this.title
            val.name = this.name;
        })
    }

    //设置每一个表单中的字段如何显示
    setFormVale(info: object) {

        if (!info) return; //对象为空返回
        var name = info[this.name];
        if (!name) return; //值为空返回

        //如果字段为对象
        if (this.type == 'object') {
            let key = Object.keys(name);
            name = name[key[0]];
        }

        //如果字段为文件
        if (this.type == "file" && name.length > 0 && name[0] != null) {
            this.files = name;
            name = this.files.map(p => p.id)
        } else {
            this.files = [];
        }
        this.formInfo.get(this.name).setValue(name);
        if (this.type == "editor") {
            this.editorContent = name;
        }
    }

}

