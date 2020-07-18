import { BasicAuthenticationService } from './../service/basic-authentication.service';
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
    private auth: HardcodedAuthenticationService,
    private basicAuth: BasicAuthenticationService
    ) { }

  ngOnInit(): void {
    console.log(`Valid credentials--> in28minutes:dummy`);
  }

  handleLogin(){

    if(this.auth.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;

    } else{
      this.invalidLogin = true ;

    } 

  }

  handleBasicAuthLogin(){

    this.basicAuth.executeAuthenticationService(this.username, this.password)
    .subscribe(
        data=> {
        console.log(data)
        this.router.navigate(['welcome', this.username]);
        this.invalidLogin = false;
      },
        error =>{
        console.log(error)
        this.invalidLogin = true
      } 
    )
    
  }

}
