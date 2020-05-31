import { Component, OnInit } from '@angular/core';


//decorator
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //member variable
  message = 'Welcome message'

  constructor() { }

  ngOnInit(): void {
    console.log(this.message);
  }

}
