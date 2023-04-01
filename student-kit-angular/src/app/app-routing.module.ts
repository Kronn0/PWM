import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { HomeComponent } from './home/home.component';
import { HorarioComponent } from './horario/horario.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { AsignaturaInfoComponent } from './asignaturas/pages/asignatura-info/asignatura-info.component';
import { InformationCardComponent } from './asignaturas/pages/asignatura-info/pages/information-card/information-card.component';
import { RegisterComponent } from './auth/register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AuthLayoutComponent } from './auth/auth-layout/auth-layout.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'asignaturas',
    pathMatch: 'full'
  },
  {path: '', 
  component: HomeComponent,
  children: [
    { path: 'horario', component: HorarioComponent, },
    { path: 'asignaturas', component: AsignaturasComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
    { path: 'profesores', component: ProfesoresComponent,  },
    { path: 'asignaturaInfo', 
      component: AsignaturaInfoComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])),
      children: [
        {path: ':id', component: InformationCardComponent},
      ]
  },
  ]
  },
  { path: '', component: AuthLayoutComponent,
  children: [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
  ]
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
