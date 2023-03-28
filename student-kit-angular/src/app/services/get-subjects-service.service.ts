import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface subject{
  asignatura: string,
  año: string,
  creditos: string,
  departamento: string,
  duracion: string,
  id: string,
  proyectoDocente: string,
  tipo: string,
  titulacion: string
}


@Injectable({
  providedIn: 'root'
})
export class GetSubjectsServiceService {

  private url = './../../assets/subjects.json'

  constructor(private http: HttpClient) { }

  getSubjects(){
    return this.http.get<subject[]>(this.url)
  }
}
