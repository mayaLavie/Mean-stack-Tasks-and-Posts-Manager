import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule , Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const appRoutes :Routes = [
  {path: 'Tasksposts/:id',component : TaskspostsComponent},
  {path: 'adduser',component : AdduserComponent}
]

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UserslistComponent } from './userslist/userslist.component';
import { UserComponent } from './user/user.component';


import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


import { TaskspostsComponent } from './tasksposts/tasksposts.component';
import { TaskComponent } from './task/task.component';
import { PostComponent } from './post/post.component';
import { AdduserComponent } from './adduser/adduser.component'





@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    UserslistComponent,
    UserComponent,
    TaskspostsComponent,
    TaskComponent,
    PostComponent,
    AdduserComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatSliderModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
