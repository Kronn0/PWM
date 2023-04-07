import { Injectable, Injector } from '@angular/core';
import { AngularFireList } from '@angular/fire/compat/database';
import { Subject } from 'src/app/models/subject/subject';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private dbPath = '/subjects'
  subjectsRef: AngularFireList<Subject>

  constructor(private db: AngularFireDatabase) {
    this.subjectsRef = this.db.list(this.dbPath);
    
   }

   getAll(): AngularFireList<Subject>{
    return this.subjectsRef
   }

}

