import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular/Apollo';

import { TabsPage } from '../tabs/tabs'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup = this.fb.group({
    username: ['admin', [Validators.required]],
    password: ['123456', [Validators.required]]
  });

  loginGql: FormGql = {
    data: ''
  }

  constructor(public navCtrl: NavController, public toastCtrl: ToastController,
    private fb: FormBuilder, private apollo: Apollo) {

  }


  login(user: any) {
    const { username, password } = user;

    const loginStr = gql`
      query($username:String!,$password:String!){
        id:login(username:$username,password:$password){
          id
        }
      }`;

    const query = {
      query: loginStr,
      variables: { username, password }
    }

    this.apollo.query<{ id: string }>(query).subscribe(({ data }) => {
      if (data.id) {
        this.navCtrl.push(TabsPage);
      } else {
        let toast = this.toastCtrl.create({
          message: '用户名或密码错误',
          showCloseButton: true,
          duration: 1000,
          position: "top"
        });
        toast.present();
      }
    })    
  }

}
