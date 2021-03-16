import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UsersBLService } from '../users-bl.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {
  
  sub : Subscription
  users : User [] = [];
  phrase:string;

  constructor(private BL : UsersBLService,private router : Router) { }

  
  ngOnInit(): void {
    this.getUsers()
  
  }

  getUsers()
  {
    this.sub = this.BL.getAllUsers().subscribe(data=>this.users = data);
      console.table(this.users);
  }

  async userSearch()
  {
    if(this.phrase !=null)
    {
      this.users = await this.BL.searchUser(this.phrase)
    }
    else
    {
      this.getUsers()
    }
  }

  addUser()
  {
    this.router.navigate(['/adduser']);
  }


  ngOnDestroy()
  {
    if(this.sub){
      this.sub.unsubscribe();
    };
  }

}
