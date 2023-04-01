import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { HomeComponent } from './home/home.component';
import { HorarioComponent } from './horario/horario.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { AsignaturaInfoComponent } from './asignaturas/pages/asignatura-info/asignatura-info.component';
import { InformationCardComponent } from './asignaturas/pages/asignatura-info/pages/information-card/information-card.component';

const routes: Routes = [
  {path: '', 
  component: HomeComponent,
  children: [
    { path: 'horario', component: HorarioComponent },
    { path: 'asignaturas', component: AsignaturasComponent },
    { path: 'profesores', component: ProfesoresComponent },
    { path: 'asignaturaInfo', 
      component: AsignaturaInfoComponent,
      children: [
        {path: ':id', component: InformationCardComponent},
      ]
  },

  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
