import { TypeGoods } from "./typeGoods";
import { TypeBusiness } from "./typeBusiness";

export class TypeTransaction {
    id: String
    code: String
    Goods: TypeGoods
    Business: TypeBusiness
    User: any
    state: Number
    endTime: Date
    updateAt: Date
    createAt: Date

    constructor() {
        this.id = '';
        this.code = '';
        this.Goods = new TypeGoods();
        this.Business = new TypeBusiness();
        this.updateAt = null;
        this.createAt = null;
    }
}