import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service'

import { Task } from 'src/app/Task';
// import { Tasks } from 'src/app/mock-tasks';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[] = []

  constructor( private taskService:TaskService) { }//to use a service you need to add it as a provider to constructor

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>{this.tasks = tasks})

  }

  //to delete task also fires the service to delete from db/api
  deleteTask(task:Task){
    this.taskService.deleteTask(task)
    .subscribe(
      ()=>(this.tasks = this.tasks.filter(t => t.id !==
         task.id)))

  }
  //toggle reminder called from its html

  toggleReminder(task){
    task.reminder = !task.reminder//setting it to its opposite
     this.taskService.updateTaskReminder(task).subscribe();//enable the reminder to stick on relod also keep the the border
  }

  //adding task that remains even on relod to server

  AddTask(task:Task) {
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push()));
  }

}
