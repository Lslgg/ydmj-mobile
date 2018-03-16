

export class TypeAnswer {
    id: String
    name: String
    type: String
    content: String
    isValid: Boolean
    startDate: Date
    endDate: Date
    updateAt: Date
    createAt: Date

    constructor() {
        this.id = '';
        this.name = '';
        this.type = '';
        this.content = '';
        this.isValid = false;
        this.startDate = null;
        this.endDate = null;
        this.updateAt = null;
        this.createAt = null;
    }
}