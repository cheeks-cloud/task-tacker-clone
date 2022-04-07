import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'Task Tracker'; 

  //adding property values
  showAddTask : boolean;
  subscription:Subscription

  //to use a service it has to be paassed to constructor
  //use subscription on togle to sconstructor to see the change
  constructor( private uiService:UiService, private router: Router) { 
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value)=> (this.showAddTask = value))

  } //runs whenever u initialise a component


  ngOnInit(): void {//a lifecycle method when u want it to rn when page load\or
  }
// thsi toggle addtask runs after being caught in template
  toggleAddTask(){
  this.uiService.toggleAddTask()
  }

  //to reomove add button from about
  hasRoute(route:string){
    return this.router.url === route;
  }

}
