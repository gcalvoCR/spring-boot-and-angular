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

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(`Valid credentials--> Gabriel:admin`);
  }

  handleLogin(){

    if(this.username==='Gabriel' && this.password==='admin'){
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;

    } else{
      this.invalidLogin = true ;

    } 

  }

}
