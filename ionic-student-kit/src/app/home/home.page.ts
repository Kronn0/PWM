import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {  faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons'
import { faRectangleList } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  faCalendar = faCalendar
  faPersonChalkboard = faPersonChalkboard
  faRectangleList = faRectangleList

  constructor(
   private router: Router
  ) {
   
  }



}
