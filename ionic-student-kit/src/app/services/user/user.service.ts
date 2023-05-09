import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import '@firebase/auth'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, Auth } from 'firebase/auth';
import { getDatabase, Database, ref, set, push } from 'firebase/database'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private app;
  private auth: Auth
  private database: Database 

  constructor() { 
    
    this.app = initializeApp(environment.firebase)
    this.auth = getAuth(this.app)
    this.database = getDatabase(this.app)
  }

  login({email, password}: any) {
    return signInWithEmailAndPassword(this.auth, email, password)
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

}
