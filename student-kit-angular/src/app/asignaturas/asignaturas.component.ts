import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from '../models/subject/subject';
import { SubjectService } from '../services/subject/subject.service';
import { map } from 'rxjs';
import { DataServiceService } from '../services/dataService/data-service.service';


@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {
  
  searchText: string = ""
  //subjects: subject[] = []

  subjects: Subject[]
  filteredSubjects: Subject[]
  filters = {}

  semestersCheckboxes = [
    {name: "firstSemester", label: "1er. semestre", isChecked: false},
    {name: "secondSemester", label: "2ş semestre", isChecked: false}
  ]

  constructor(private router: Router, private subjectService: SubjectService){}

  goToChild(id: number){
    this.router.navigate(['child', id])
  }

  ngOnInit(): void{
    this.retrieveSubjects()
  }

  
  retrieveSubjects(): void {
    this.subjectService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.subjects = data
      this.applyFilters()
    })
  }

  applyFilters(){
    this.filteredSubjects = this.subjects.filter(subject => {
      return (
        subject.duracion === "1er. semestre"
      )
    })
  }
}
