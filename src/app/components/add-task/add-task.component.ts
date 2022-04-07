import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task'
import { UiService } from 'src/app/services/ui.service';
 import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()

                          //property 4 all form fields
  text:string;
  day:string;
  reminder:boolean = false;
  showAddTask:boolean;
  subscription: Subscription;
                        //to use forms u must import the module and add it to modeules.app.ta

  constructor( private uiService: UiService) { 
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value)=> (this.showAddTask = value))


  }

  ngOnInit(): void {
  }

                             //we want to carry functionality to parent tasks so we emit
  onSubmit(){
    const newTask = {
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }
                                  //emit the event
    this.onAddTask.emit (newTask)

                                //to clear form after input
    this.text = '';
    this.day = '';
    this.reminder = false

  }

}
