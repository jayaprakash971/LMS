import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private authService: AuthService, private route : Router) { }

  token! : number

  username: string = "null";

  ngOnInit(): void {
    this.loggedInUsername();
  }

  loggedInUsername() {
    if(localStorage.length>0) {
      this.token = Number(localStorage.getItem("token")!);
      console.log("token : " + this.token);
      this.authService.loggedInUsername(this.token).subscribe(username => this.username = "Welcome, " + username)
    }
  }

  logout() {
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }

}
