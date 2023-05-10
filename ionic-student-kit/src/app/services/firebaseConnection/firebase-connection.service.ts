import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Database, getDatabase } from 'firebase/database';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseConnectionService {

  private app;
  private auth: Auth
  private database: Database 

  constructor() { 
    
    this.app = initializeApp(environment.firebase)
    this.auth = getAuth(this.app)
    this.database = getDatabase(this.app)
  }

  getAuth(){
    return this.auth
  }

  getDatabase(){
    return this.database
  }

  getApp(){
    return this.app
  }


}
