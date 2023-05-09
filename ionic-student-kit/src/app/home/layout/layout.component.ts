import { Component, OnInit } from '@angular/core';
import { faCalendar, faPersonChalkboard, faRectangleList, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent  implements OnInit {

  faCalendar = faCalendar
  faPersonChalkboard = faPersonChalkboard
  faRectangleList = faRectangleList
  faUser = faUser

  constructor() { }

  ngOnInit() {}

}
