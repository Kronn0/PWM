import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private paramSource = new BehaviorSubject<any>([]);
  sharedParam = this.paramSource.asObservable();

  constructor() { }

  changeParam(param: any[]) {
    this.paramSource.next(param)
  }
}
