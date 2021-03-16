import { identifierModuleUrl } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UsersBLService } from '../users-bl.service';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { User } from '../user';
import { Task } from '../task';




@Component({
  selector: 'app-tasksposts',
  templateUrl: './tasksposts.component.html',
  styleUrls: ['./tasksposts.component.scss']
})
export class TaskspostsComponent implements OnInit {
  sub1: Subscription;
  sub2: Subscription;
  sub3: Subscription;
  sub4: Subscription;

  userId : string ="";
  user :  User = new User();

  TaskStatusFromTask : string;
  TaskId :string ;

  TaskListOn :boolean = true; 
  AddTaskOn :boolean = false;
  Title : string ;

  PostListOn : boolean = true;
  AddPostOn:boolean =false;
  PostTitle : string ;
  PostBody : string ;

  constructor(private BL : UsersBLService , private router : Router, private AR : ActivatedRoute) { }

  ngOnInit(): void {
   this.sub1 = this.AR.params.subscribe(data =>
    {
       this.userId = data["id"];
       console.log(this.userId);
       this.sub2 = this.BL.getUserById(this.userId).subscribe(data=>this.user=data );
       })
 }


 UpdateTaskStatus(taskId: string)
 { const findTask = this.user.Tasks.find((task)=>task._id === taskId)
    findTask.completed = true;
    this.sub3 = this.BL.updateUser(this.user._id,this.user)
   .subscribe(status =>{ })
 }

 addTask()
 {
  this.TaskListOn  = false;
  this.AddTaskOn = true ; 
}

NewTask()
{ 
  this.user.Tasks.push({title:this.Title,completed:false})
  this.sub4 = this.BL.updateUser(this.user._id,this.user)
  .subscribe(status =>{  })
  window.location.reload();
}


addPost()
 {
  this.PostListOn = false;
  this.AddPostOn =true;
 }


NewPost()
{ 
  this.user.Posts.push({title:this.PostTitle,body:this.PostBody})
  this.sub4 = this.BL.updateUser(this.user._id,this.user)
  .subscribe(status =>{  })
  window.location.reload();
}





ngOnDestroy()
{
  if(this.sub1){
    this.sub1.unsubscribe();
  };
  if(this.sub2){
   this.sub2.unsubscribe();
 };
 if(this.sub3){
   this.sub3.unsubscribe();
 };
 if(this.sub4){
   this.sub4.unsubscribe();
 };
}



}
