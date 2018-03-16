import { TypeBusiness } from "./typeBusiness";
import { TypeImages } from "./typeImages";
import { TypeGoodsType } from "./typeGoodsType";

export class TypeGoods {
    id: String
    Business: TypeBusiness
    GoodsType: TypeGoodsType
    Images: [TypeImages]
    name: String
    score: Number
    ruler: String
    explain: String
    stock: Number
    times: Number
    validTime: Number
    sortIndex: Number
    isValid: Boolean
    updateAt: Date
    createAt: Date

    constructor() {
        this.id = '';
        this.Business = new TypeBusiness();
        this.GoodsType = new TypeGoodsType();
        this.Images = [new TypeImages];
        this.name = '';
        this.score = 0;
        this.ruler = '';
        this.explain = '';
        this.stock = 0;
        this.times = 0;
        this.validTime = 0;
        this.sortIndex = 0;
        this.isValid = false;
        this.updateAt = null;
        this.createAt = null;
    }

}