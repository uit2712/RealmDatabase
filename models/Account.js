
export default class Account {
    username: string;
    password: string;
    name: string;
    online: boolean;

    constructor(username: string = undefined, password: string = undefined, name: string = undefined) {
        this.username = username;
        this.password = password;
        this.name = name;
    }

    checkIfUsernameIsValid = () => {
        return this.username && this.username != "";
    }

    checkIfPasswordIsValid = () => {
        return this.password && this.password != "";
    }

    isValid = () => {
        return this.checkIfUsernameIsValid(this.username) && this.checkIfPasswordIsValid(this.password);
    }

    getObjectInfo() {
        return {
            username: this.checkIfUsernameIsValid(this.username) ? this.username : undefined,
            password: this.checkIfPasswordIsValid(this.password) ? this.password : undefined,
            name: this.name,
            online: this.online
        }
    }
}

const AccountSchema = {
    name: "Account",
    properties: {
        username: "string",
        password: "string",
        name: { type: "string" , optional: true},
        online: { type: "bool" , default: false},
    }
}

Account.schema = AccountSchema;