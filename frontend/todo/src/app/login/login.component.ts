import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  errorMessage: string ='Invalid credentials';
  invalidLogin = false;

  //Router

  constructor(
    private router: Router, 
    private auth: HardcodedAuthenticationService
    ) { }

  ngOnInit(): void {
    console.log(`Valid credentials--> Gabriel:admin`);
  }

  handleLogin(){

    if(this.auth.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;

    } else{
      this.invalidLogin = true ;

    } 

  }

}
