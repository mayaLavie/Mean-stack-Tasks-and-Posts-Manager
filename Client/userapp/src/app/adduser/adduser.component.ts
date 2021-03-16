import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UsersBLService } from '../users-bl.service';
import { User } from '../user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  user : User = new User();
  sub : Subscription;

  constructor(private router : Router, private BL : UsersBLService) { }

  ngOnInit(): void {
  }

  addUser()
  {
    let newUser = { Name: this.user.Name, Email: this.user.Email }
    this.sub = this.BL.addUser(newUser)
    .subscribe(() => 
      { 
        alert('success !');
        this.router.navigate(['']);
        window.location.reload();
      })
  }

  cancel()
  {
    this.router.navigate(['']);
  }

  ngOnDestroy()
  {
    if(this.sub){
      this.sub.unsubscribe();
    };
  }


}
