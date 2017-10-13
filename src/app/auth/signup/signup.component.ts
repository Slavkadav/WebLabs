import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../Entities/Services/user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    providers:[UserService]
})
export class SignupComponent implements OnInit {

    @ViewChild('f') signupForm: NgForm;

    constructor(private userService: UserService, private route:Router) {
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log(this.signupForm);

        if(this.signupForm.valid){
            this.userService.saveUser(this.signupForm.value.username,this.signupForm.value.password,this.signupForm.value.email);
            this.route.navigate(['']);
        }
    }
}
