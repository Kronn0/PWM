import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';
import { GetSubjectsServiceService, subject } from 'src/app/services/get-subjects-service.service';

@Component({
  selector: 'app-asignatura-info',
  templateUrl: './asignatura-info.component.html',
  styleUrls: ['./asignatura-info.component.css']
})
export class AsignaturaInfoComponent {

  subjects: subject[] = []

  constructor(
    private getSubjectsService:GetSubjectsServiceService, 
    private router: Router, 
    private dataService:DataServiceService
    ){}

  goToChild(id: number){
    this.router.navigate(['child', id])
  }

  ngOnInit(): void{
    this.getSubjectsService.getSubjects().subscribe((subjects: subject[]) => {
      this.subjects = subjects
      this.dataService.changeParam(this.subjects)
    })
  }

  

}
