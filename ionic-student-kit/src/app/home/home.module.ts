import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { LayoutComponent } from './layout/layout.component';
import { HorariosPageModule } from './horarios/horarios.module';
import { ProfesoresPageModule } from './profesores/profesores.module';
import { AsignaturasPageModule } from './asignaturas/asignaturas.module';
import { PerfilPageModule } from './perfil/perfil.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FontAwesomeModule,
    HorariosPageModule,
    ProfesoresPageModule,
    AsignaturasPageModule,
    PerfilPageModule

  ],
  declarations: [
    HomePage,
    LayoutComponent
  ]
})
export class HomePageModule {}
