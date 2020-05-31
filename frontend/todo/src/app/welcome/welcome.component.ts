import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


//decorator
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //member variable
  message = 'Welcome message'
  name: string = ''

  //ActivatedRoute
  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }

}
