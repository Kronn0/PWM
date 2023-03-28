import { Component } from '@angular/core';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent {
  buttonToggle:boolean = false;

  toggleMenu(){
    this.buttonToggle = !this.buttonToggle
  }
}
