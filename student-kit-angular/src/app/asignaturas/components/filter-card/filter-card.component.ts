import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-card',
  templateUrl: './filter-card.component.html',
  styleUrls: ['./filter-card.component.css']
})
export class FilterCardComponent implements OnInit {
    @Input() inputCheckboxes: {name: string, label: string, isChecked: boolean}[]  
    @Input() searchText: string


  ngOnInit(): void {
      
  }

  onChangeCheckbox(event: any, semesterName: string){
    this.inputCheckboxes.forEach(element => {
      if(semesterName == element.name){
        element.isChecked = event.target.checked
      }
    })
  }

}

