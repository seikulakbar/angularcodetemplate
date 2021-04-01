import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {  
  successBoolean = false;
  successMsg = 'Spring Boot Template Code Generated'
  message = 'Some Welcome Message'
  welcomeMessageFromService:string=''
  name = ''

  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService,
    private router : Router) { }

  ngOnInit(): void {
  }

  getWelcomeMessageWithParameter(){
    //console.log(this.service.executeHelloWorldBeanService());
    //console.log("hello");
      
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }


  handleSuccessfulResponse(response: HelloWorldBean){
    this.welcomeMessageFromService = response.message
    //console.log(response);
    //console.log(response.message);
  }

  handleErrorResponse(error: { message: string; }) {
    //console.log(error);
    //console.log(error.error);
    //console.log(error.error.message);
    this.welcomeMessageFromService = error.message
  }

  addTemplate() {
    this.router.navigate(['templates'])
  }

}
