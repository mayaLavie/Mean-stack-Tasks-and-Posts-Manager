import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersBLService } from '../users-bl.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Task } from '../task';
import { element } from 'protractor';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
 @Input()
  user : User ;
  sub1 : Subscription;
  sub2 : Subscription;
  isOtherDataVisible : boolean = false;
  isTaskCompleted : boolean;
  userChossen :  boolean = false;
  
  constructor(private router : Router, private BL : UsersBLService,) { }

  ngOnInit(): void {
 
     let userTasks: Task[] =this.user.Tasks;

      this.isTaskCompleted = userTasks.some(x=>x.completed===false)

  }

  OtherData()
  {
    this.isOtherDataVisible =true;
  }


  hideData()
  {
    this.isOtherDataVisible =false;
  }


  todosposts(id)
  {
    if(this.user._id == id)
    { 
      this.userChossen = true;
    }
    this.router.navigate(['Tasksposts/' +this.user._id]);
  }


  closeWindow()
  {
    this.userChossen = false;
    this.router.navigate([''])
  }


  delete()
  {
    this.sub1 = this.BL.deleteUser(this.user._id)
      .subscribe(status =>
        {  
          this.router.navigate([''])
          window.location.reload();
          alert(status);
        })
  } 
  
  
  update()
  {
    this.sub2 = this.BL.updateUser(this.user._id,this.user)
      .subscribe(status =>
        {
          alert(status); 
        })
  }

  ngOnDestroy()
  {
    if(this.sub1){
      this.sub1.unsubscribe();
    };
    if(this.sub2){
      this.sub2.unsubscribe();
    };
  }

}
