import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask:boolean = false;
  private subject = new Subject<any>();

  constructor() { }

   toggleAddTask():void{
     this.showAddTask = !this.showAddTask;//setting it to opposite
     this.subject.next(this.showAddTask)//next passes in what is passe from showadd task
   }

   onToggle():Observable<any>{
     return this.subject.asObservable();
   }


}
