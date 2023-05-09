import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { LayoutComponent } from './layout/layout.component';
import { ProfesoresPage } from './profesores/profesores.page';
import { HorariosPage } from './horarios/horarios.page';
import { AsignaturasPage } from './asignaturas/asignaturas.page';
import { PerfilPage } from './perfil/perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FontAwesomeModule,
  ],
  declarations: [
    HomePage,
    ProfesoresPage,
    HorariosPage,
    AsignaturasPage,
    PerfilPage,
    LayoutComponent
  ]
})
export class HomePageModule {}
