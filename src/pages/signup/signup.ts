import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import gql from 'graphql-tag';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupForm: FormGroup = this.fb.group({
    username: ['lslgg', [Validators.required]],
    name: ['lslgg', [Validators.required]],
    email: ['lslgg@lslgg.com', [Validators.required, Validators.minLength(6)]],
    pwdList: new FormGroup({
      password: new FormControl('123456', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('123456')
    }, this.pwdMatch),
  });

  signupGql: FormGql = {
    save: gql`mutation($info:inputUser){
      saveUser(user:$info) { id }
    }`,
    url: "LoginPage",
  };



  constructor(public navCtrl: NavController, public toastCtrl: ToastController,
    private fb: FormBuilder) {

  }


  //密码验证
  private pwdMatch(g: FormGroup) {
    let password = g.get('password').value;
    let passwordConfirm = g.get('passwordConfirm').value;
    if (password != passwordConfirm) {
      g.get('passwordConfirm').setErrors({ MatchPassword: true })
    } else {
      return null;
    }
  }


}
