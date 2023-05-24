import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import '@firebase/auth'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, Auth, User } from 'firebase/auth';
import { getDatabase, Database, ref, set, push, update } from 'firebase/database'
import { FirebaseConnectionService } from '../firebaseConnection/firebase-connection.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private auth: Auth
  private database: Database
  private currentUser: User | undefined

  constructor(private firebaseConnectionService: FirebaseConnectionService) { 
    
    this.auth = this.firebaseConnectionService.getAuth()
    this.database = this.firebaseConnectionService.getDatabase()
  }

  login({email, password}: any): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        this.currentUser = userCredential.user;
        return userCredential;
      })
      .catch(error => {
        throw error;
      });
  }

  register({email, username, password}: any) {
    this.registerInDatabase(email, username)
    return createUserWithEmailAndPassword(this.auth, email, password)
    
  }

  registerInDatabase(email: string, username: string) {
    const usersRef = ref(this.database, 'users/')
    const newUserRef = push(usersRef)
    set(newUserRef, {
      username: username,
      email: email,
    })
  }

  updateUsername(newUsername: string, userId: string){
    const usersRef = ref(this.database, `users/${userId}`)
    update(usersRef, {
      username: newUsername,
    })
    .then(() => {
      console.log("Email updated successfully")
    })
    .catch((error) => {
      console.error("Error updating email", error)
    })
  }


  getCurrentUser(){
    return this.currentUser
  }

}
