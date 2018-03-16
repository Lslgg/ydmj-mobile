import { TypeImages } from "./typeImages";

export class TypeBusiness {
    id:String
    name:String
    address:String
    phone:String
    hours:String
    brief:String
    Images:[TypeImages]
    times:Number
    sortIndex:Number
    score:Number
    isValid:Boolean 
    updateAt:Date
    createAt:Date

    constructor() {
        this.id = '';
        this.name = '';
        this.address ='';
        this.phone = '';
        this.hours = '';
        this.brief = '';
        this.Images = [new TypeImages()];
        this.times = 0;
        this.sortIndex = 0;
        this.score = 0;
        this.isValid = false;
        this.updateAt = null;
        this.createAt = null;
    }
}