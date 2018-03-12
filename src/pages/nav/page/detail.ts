import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'app-nav-detail',
    templateUrl: './detail.html',
})
export class DetailPage implements OnInit {

    id: String;
    answer: { id: String, name: String, content: String } = { id: '', name: '', content: '' };
    constructor(public navCtrl: NavController, private apollo: Apollo, public navParams: NavParams) { }

    ngOnInit() {
        this.id = this.navParams.get('id');
        this.getList();
    }

    getList() {

        const sql = gql`query($id:String) {            
            answer:getAnswerById(id:$id) {
                id name
            }            
        }`;

        var query: any = {
            query: sql,
            variables: { id: this.id },
            fetchPolicy: "network-only"
        }

        type answer = { id: String, name: String, content: String };
        this.apollo.query<answer>(query).subscribe(({ data }) => {
            if (data && data['answer']) {
                Object.assign(this.answer, data['answer']);
            }
        });
    }

}
