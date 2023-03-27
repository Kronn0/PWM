import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { HomeComponent } from './home/home.component';
import { HorarioComponent } from './horario/horario.component';
import { ProfesoresComponent } from './profesores/profesores.component';

const routes: Routes = [
  {path: '', 
  component: HomeComponent,
  children: [
    { path: 'horario', component: HorarioComponent },
    { path: 'asignaturas', component: AsignaturasComponent },
    { path: 'profesores', component: ProfesoresComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
