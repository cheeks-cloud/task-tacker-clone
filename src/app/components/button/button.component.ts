import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
//we add an output and event emiiter to listen and output an event fom onclick function
export class ButtonComponent implements OnInit {
  @Input() text:string;
  @Input() color:string;
  @Output() btnClick = new EventEmitter();
    

  constructor() { }

  ngOnInit(): void {}

  onClick(){
    this.btnClick.emit()
  }

}
