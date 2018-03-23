import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Envioronment } from '../../common/envioronment';

@Component({
    selector: 'home-slide-ad',
    templateUrl: 'slideAd.html'
})
export class SlideAdComponent implements OnInit {

    @Input() type: String = '';
    @Output() onCard = new EventEmitter<boolean>();
    dataServer:String = Envioronment.dataServer;
    adList: Array<{ id: String, Images: { path: String }, link: String }> = [];

    constructor(private apollo: Apollo) { }

    ngOnInit() {
        if (this.type) {
            this.getAdList();            
        }
    }

    clickGoods() {
        this.onCard.emit(true);
    }

    getAdList() {
        var date = new Date().toISOString();
        const sql = gql`
          query($isValid:Boolean,$type:Json,$startDate:Json,$endDate:Json){
            adList:getAdvertmWhere(advertm:{isValid:$isValid,type:$type,startDate:$startDate,endDate:$endDate}) {
                id,Images{path},link
            }
        }`;
        var query: any = {
            query: sql,
            variables: { isValid: true, type: `{"$eq":"${this.type}"}`, startDate: `{"$lte":"${date}"}`, endDate: `{"$gt":"${date}"}` },
            fetchPolicy: "network-only"
        }
        type ad = Array<{ id: String, Images: { path: String }, link: String }>;
        this.apollo.query<ad>(query).subscribe(({ data }) => {
            this.adList = data['adList'];            
        })
    }
}