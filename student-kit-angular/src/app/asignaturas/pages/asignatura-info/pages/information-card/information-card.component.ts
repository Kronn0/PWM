import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find } from 'rxjs';
import { Subject } from 'src/app/models/subject/subject';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';
@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.css']
})
export class InformationCardComponent {
  id: any;
  subjectObject: Subject
  subjString: string
  subjects: Subject[] = []

  constructor(
    private route: ActivatedRoute, 
    private dataService: DataServiceService
    ) {}

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.id = params.get('id')
        this.dataService.sharedParam.subscribe((param) => {
          this.subjects = param
          console.log(param)
          this.subjects.find((item) => {
            if(item.id === this.id){
              this.subjectObject = item
              console.log(this.subjectObject.id)
            }
          })
        })
      })    
    }
}
