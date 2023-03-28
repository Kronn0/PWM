import { Component, OnInit } from '@angular/core';
import { GetSubjectsServiceService, subject } from '../services/get-subjects-service.service';


@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {
  
  searchText: string = ""
  subjects: subject[] = []

  constructor(private getSubjectsService:GetSubjectsServiceService){}

  ngOnInit(): void{
    this.getSubjectsService.getSubjects().subscribe((subjects: subject[]) => {
      this.subjects = subjects
    })
    
  }
}
