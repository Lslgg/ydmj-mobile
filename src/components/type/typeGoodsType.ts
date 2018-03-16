import { TypeBusiness } from "./typeBusiness";

export class TypeGoodsType {
    id:String
    name:String
    Business:TypeBusiness
    updateAt:Date
    createAt:Date

    constructor() {
        this.id = '';
        this.name = '';
        this.Business = new TypeBusiness;
        this.updateAt = null;
        this.createAt = null;
    }

}