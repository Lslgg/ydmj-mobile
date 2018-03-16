

export class TypeUser {
    id: String
    username: String
    name: String
    email: String
    password: String
    updateAt: Date
    createAt: Date
    Role: any
    isValid: Boolean
    Profile: any


    constructor() {
        this.id = '';
        this.username = '';
        this.name = '';
        this.email = '';
        this.password = '';
        this.updateAt = null;
        this.createAt = null;
        this.Role = null
        this.isValid = false;
        this.Profile = null;
    }
}