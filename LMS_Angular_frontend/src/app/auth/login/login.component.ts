import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = "";
  password : string = "";

  user : User = new User();

  constructor(private authService : AuthService, private route : Router) {

   }

  ngOnInit(): void {
  }

  login() {
    this.user.user_email = this.email;
    this.user.user_password = this.password;

    this.authService.login(this.user).subscribe(res => {

      if(res == null) {
        alert("Uername or password is wrong");
        this.ngOnInit();
      }else {
        console.log("Login successful");
        localStorage.setItem("token",res.id);

        if(res.role == 'student') {
          this.route.navigate(['/user']);
        }

        if(res.role == 'admin') {
          this.route.navigate(['/admin']);
        }

      }
    }, err => {
      console.log(this.user.user_email);
      console.log(this.user.user_password);
      console.log(this.user.role);
      alert("Login failed");
      this.ngOnInit();
    })
  }
}
