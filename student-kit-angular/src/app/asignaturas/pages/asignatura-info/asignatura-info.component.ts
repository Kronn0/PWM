import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'src/app/models/subject/subject';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';
import { SubjectService } from 'src/app/services/subject/subject.service';
import { map } from 'rxjs';


@Component({
  selector: 'app-asignatura-info',
  templateUrl: './asignatura-info.component.html',
  styleUrls: ['./asignatura-info.component.css']
})
export class AsignaturaInfoComponent {

  subjects: Subject[]

  constructor(
    private router: Router, 
    private subjectService: SubjectService,
    private dataService: DataServiceService
  ){}

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
      this.dataService.changeParam(data)
    })
  }
}
