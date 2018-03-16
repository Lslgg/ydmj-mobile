import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { TypeAnswer } from '../../components/type/typeAnswer';

@IonicPage()
@Component({
    selector: 'app-nav',
    templateUrl: './nav.html',
})
export class NavPage implements OnInit {

    answerList: Array<{ id: String, name: String }> = [];

    constructor(public navCtrl: NavController, private apollo: Apollo) { }

    ngOnInit() {
        this.getList();
    }

    itemSelected(id: String) {
        this.navCtrl.push("DetailPage", {
            id: id
        });
    }

    getList() {
        var date = new Date().toISOString();
        const sql = gql`query($isValid:Boolean,$startDate:Json,$endDate:Json) {
            answerList:getAnswerWhere(answer:{isValid:$isValid,startDate:$startDate,endDate:$endDate}) {
                id name
            } 
        }`;
        var query: any = {
            query: sql,
            variables: { isValid: true, startDate: `{"$lte":"${date}"}`, endDate: `{"$gt":"${date}"}` },
            fetchPolicy: "network-only"
        }
        
        this.apollo.query<TypeAnswer>(query).subscribe(({ data }) => {
            this.answerList = data['answerList'];
        });
    }
}
