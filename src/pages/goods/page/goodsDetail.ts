import { Component, OnInit } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { TypeGoods } from '../../../components/type/typeGoods';

@IonicPage()
@Component({
    selector: 'home-goods-details',
    templateUrl: 'goodsDetail.html'
})
export class GoodsDetailPage implements OnInit {

    goods: TypeGoods = new TypeGoods();

    constructor(public navParams: NavParams, private apollo: Apollo, ) { }

    ngOnInit() {
        let id = this.navParams.get('id');
        if (id) {
            this.getGoods(id);
        }
    }

    getGoods(id: String) {
        const sql = gql`
        query($id:String){
          goods:getGoodsById(id:$id ) {
            id Business{id,name,address} GoodsType{name} Images{path} name score ruler
             explain stock times validTime          
          } 
        }
      `;

        var query: any = {
            query: sql,
            variables: { id: id },
            fetchPolicy: "network-only"
        }

        this.apollo.query<TypeGoods>(query).subscribe(({ data }) => {
            if (data && data['goods']) {
                Object.assign(this.goods, data['goods']);
                this.goods.validTime = parseFloat(this.goods.validTime + '') / (1000 * 60 * 60 * 24);
            }
        })
    }
}