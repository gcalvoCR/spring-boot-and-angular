import { WelcomeDataService } from './../service/data/welcome-data.service';
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
  welcomeMessageFromService: string
  name: string = ''

  //ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
    ) { 

  }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }


  getWelcomeMessage(){
    this.service.executeHelloWorldService().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message
  }

}
