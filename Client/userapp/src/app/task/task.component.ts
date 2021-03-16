import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';
import { Task } from '../task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input()
  task : Task ;
  //isCompleted :boolean = false;
  taskId: String ;
  updatedTask:String;
  isButtonVisible :boolean = false;
  
 // @Output()
 //notify : EventEmitter<boolean> = new EventEmitter<any>();
 @Output() 
 event:EventEmitter<any> = new EventEmitter<any>();
 


  constructor() { }
  ngOnInit(): void {
     if(this.task.completed == true)
     {
       this.isButtonVisible = true;
     }

  }
  taskStatus()
  { 
    this.isButtonVisible = true;
    this.taskId = this.task._id
    //this.updatedTask = {"taskId" : this.taskId ,"status" :this.isCompleted }
    console.log(this.taskId);
  
   this.event.emit(this.taskId);
 }
}
