import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AuthPage } from '../auth/auth.page';
import { HorariosPage } from './horarios/horarios.page';
import { LayoutComponent } from './layout/layout.component';
import { ProfesoresPage } from './profesores/profesores.page';
import { AsignaturasPage } from './asignaturas/asignaturas.page';
import { PerfilPage } from './perfil/perfil.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'horarios',
        component: HorariosPage
      },
      {
        path: 'profesores',
        component: ProfesoresPage
      },
      {
        path: 'asignaturas',
        component: AsignaturasPage
      },
      {
        path: 'perfil',
        component: PerfilPage
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
