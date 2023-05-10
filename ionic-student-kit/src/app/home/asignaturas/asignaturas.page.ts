import { Component, OnInit } from '@angular/core';
import { Subject } from '../models/subject/subject';


@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  constructor() { }
  searchText = "";
  subject: Subject[];


  ngOnInit() {
  }

}
