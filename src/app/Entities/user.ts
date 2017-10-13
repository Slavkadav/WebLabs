export class User {
    rating:number;
    constructor(public nickname: string, public password: string, public email: string) {
        this.nickname = nickname;
        this.password = password;
        this.rating = 0;
        this.email = email;
    }
}