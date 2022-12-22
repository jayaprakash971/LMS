import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username : string = "";
  password : string = "";
  email : string = "";
  mobile : string = "";

  user: User = new User();

  constructor(private authService : AuthService, private route : Router) { }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
    this.email = '';
    this.password = '';
    this.mobile = '';
  }

  signup() {
    console.log(this.username+" "+this.password+" "+this.email);
    this.user.user_name = this.username;
    this.user.user_email = this.email;
    this.user.user_password = this.password;
    this.user.user_mobile = this.mobile;
    this.user.role = 'student';
    console.log(this.user);

    this.authService.signUp(this.user).subscribe(res => {
      if(res == null) {
        console.log("null")
        alert("Registration failed");
        this.ngOnInit();
      }else {
        console.log(res);
        console.log("Registration successful");
        alert("Registration successful");
        this.route.navigate(['/']);
      }
    },
    error => {
      console.log("error");
      console.log(this.user.user_name);
      console.log(this.user.user_password);
      console.log(this.user.role);
      alert("Registration failed.");
      this.ngOnInit();
    })

  }
}
