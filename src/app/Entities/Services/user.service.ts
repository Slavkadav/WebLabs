import {Injectable} from '@angular/core';
import {User} from "../user";

@Injectable()
export class UserService {

    users: User[];
    constructor() {
    }

    saveUser(user:User){
        this.users.push(user);
        localStorage.setItem('currentUser', user.nickname);
    }

}
