import { Component, OnInit } from '@angular/core';
import { GetSubjectsServiceService, subject } from '../services/getSubjects/get-subjects-service.service';
import { Router } from '@angular/router';


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

  constructor(private getSubjectsService:GetSubjectsServiceService, private router: Router){}

  goToChild(id: number){
    this.router.navigate(['child', id])
  }

  ngOnInit(): void{
    this.getSubjectsService.getSubjects().subscribe((subjects: subject[]) => {
      this.subjects = subjects
    })
    
  }
}
