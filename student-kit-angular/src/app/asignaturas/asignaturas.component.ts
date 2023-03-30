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

  semestersCheckboxes = [
    {name: "firstSemester", label: "1er. semestre", isChecked: false},
    {name: "secondSemester", label: "2ş semestre", isChecked: false}
  ]

  constructor(private getSubjectsService:GetSubjectsServiceService){}

  ngOnInit(): void{
    this.getSubjectsService.getSubjects().subscribe((subjects: subject[]) => {
      this.subjects = subjects
    })
    
  }
}
