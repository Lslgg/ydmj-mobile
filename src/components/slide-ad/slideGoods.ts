import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'home-slide-ad',
    templateUrl: 'slideAd.html'
})
export class SlideAdComponent implements OnInit {

    @Input() type: String = '';
    @Output() onCard = new EventEmitter<boolean>();
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
        const sql = gql`
          query($type:Json){
            adList:getAdvertmWhere(advertm:{type:$type}) {
                id,Images{path},link
            }
        }`;
        var query: any = {
            query: sql,
            variables: { type: `{"$eq":"${this.type}"}` },
        }
        type ad = Array<{ id: String, Images: { path: String }, link: String }>;
        this.apollo.query<ad>(query).subscribe(({ data }) => {
            this.adList = data['adList'];
        })
    }
}