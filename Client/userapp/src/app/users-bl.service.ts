import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersBLService {

  constructor(private http: HttpClient) { }

 getAllUsers()
 {
  return this.http.get<User[]>("http://localhost:8000/api/users/")
 }

 getUserById(id: String)
 {
   return this.http.get<User>("http://localhost:8000/api/users/"+id)
 }

 updateUser(id : String , user : User)
 {
  return this.http.put<User>("http://localhost:8000/api/users/"+ id ,user)
 }

 deleteUser(id : String )
 {
  return this.http.delete<User>("http://localhost:8000/api/users/"+ id )
 }

 addUser(user : User )
 {
  return this.http.post<User>("http://localhost:8000/api/users/",user)
 }

 async searchUser(phrase : string,)
 {
   
   let allUsers =  await this.http.get<User[]>("http://localhost:8000/api/users/").toPromise();
   
   let result =[]
   allUsers.forEach(user =>
    {
      if(user.Name.toLowerCase().includes(phrase.toLowerCase()) || user.Email.toLowerCase().includes(phrase.toLowerCase()))
      {
        result.push(user)
      }
      
    })
    return result;

 }

}
