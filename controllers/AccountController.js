import Account from '../models/Account';
import Message from '../models/Message';

var Realm = require('realm');
var realm = new Realm({ schema: [Account.schema] });

export const getAllAccount = () => {
    return realm.objects("Account");
}

export const login = (account: Account) => {
    let result = new Message();
    if (!account) {
        result.message = "Invalid account";
        result.result = false;
        return result;
    }

    let accounts = getAllAccount();
    let findAccount = accounts.filtered(`username = "${account.username}" AND password = "${account.password}"`);
    if (findAccount.length == 0) {
        result.message = "Wrong username or password";
        result.result = false;
        return result;
    }

    result.message = "Login successful!";
    result.result = true;
    return result;
}

export const register = (account: Account) => {
    let result = new Message();
    if (!account) {
        result.message = "Invalid account";
        result.result = false;
        return result;
    }

    if (account.username && account.username.includes(" ")) {
        result.message = "Username doesn't allow to have white space!";
        result.result = false;
        return result;
    }

    let accounts = getAllAccount();
    let findAccount = accounts.filtered(`username = "${account.username}"`);
    if (findAccount.length > 0) {
        result.message = "Account already exists!";
        result.result = false;
        return result;
    }

    try {
        realm.write(() => {
            realm.create("Account", account.getObjectInfo());
        });
        result.message = "Register successful!";
        result.result = true;
        return result;
    } catch(e) {
        result.message = `${e.message}`;
        result.result = false;
        return result;
    }
}