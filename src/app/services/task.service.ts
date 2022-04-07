import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


import { Task } from 'src/app/Task';
import { Observable} from 'rxjs';


const httpOptions ={
  headers:new HttpHeaders (
    { 'Content-Type' :' application/json'}
  )
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks'//setting property ffor ouur url

  constructor( private http:HttpClient) { } //to enable use of methods like get,post


  getTasks(): Observable<Task[]>{ 
    
     return  this.http.get <Task []>(this.apiUrl);
  
  }

  //fired from task componet.ts
  deleteTask(task:Task): Observable<Task> {
    const url =`${this.apiUrl}/${task.id}`;//to specify id as it granbs tas
    return this.http.delete<Task>(url)
  }
  //to update task reminder
  updateTaskReminder (task:Task):Observable<Task> {
    const url =`${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions) //sendd also header with content type

  }
  //to update api,,that is add task tos erver

  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions)
  }


}
//how to make an observable

// import observable, of from rxjs
// change type Task to observable<Task>,create varibale Task =of(Tasks) then return
//from ts  do this.taskService.getTasks().subscribe((tasks))=>(this.tasks = tasks)
