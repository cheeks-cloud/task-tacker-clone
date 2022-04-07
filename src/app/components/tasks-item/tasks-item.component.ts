import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

import { Task } from '../../Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {

@Input() task:Task
@Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
@Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()


faTimes = faTimes;//property for icon


  constructor() { }

  ngOnInit(): void {
  }
  //logic to delete task
  onDelete(task){
    this.onDeleteTask.emit(task)
  }
//toggle reminder
  onToggle(task){
    this.onToggleReminder.emit(task)
  }

}
