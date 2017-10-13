import {Injectable} from '@angular/core';
import {User} from "../user";

@Injectable()
export class UserService {

    users: User[]=[];
    constructor() {
    }

    saveUser(username:string, password:string, email:string){
        let user = new User(username,password,email);
        this.users.push(user);
        console.log(JSON.stringify(user));
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

}
