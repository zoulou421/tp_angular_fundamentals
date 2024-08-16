import { inject, Injectable } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, updateProfile } from "@angular/fire/auth";
import { from, Observable } from "rxjs";

//A service which will work with firebase.

@Injectable({
    providedIn:'root'
})
export class AuthService{
  firebasebaseAuth=inject(Auth)
  register(email:string, username:string,password:string):Observable<void>{
    const promise=createUserWithEmailAndPassword(
    this.firebasebaseAuth,
     email,
     password
    ).then(response=>updateProfile(response.user,{displayName:username}))
   return from(promise);
 }
}