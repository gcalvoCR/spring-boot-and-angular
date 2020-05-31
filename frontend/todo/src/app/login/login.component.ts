import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    console.log(`Valid credentials--> Gabriel:admin`);
  }

  handleLogin(){
    (this.username==='Gabriel' && this.password==='admin') ? this.invalidLogin = false : this.invalidLogin = true;  
  }

}
