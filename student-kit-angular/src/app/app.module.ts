import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { HorarioComponent } from './horario/horario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FilterCardComponent } from './asignaturas/components/filter-card/filter-card.component';
import { FilterPipe } from './pipes/filter.pipes';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AsignaturaInfoComponent } from './asignaturas/pages/asignatura-info/asignatura-info.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AsignaturasComponent,
    ProfesoresComponent,
    HorarioComponent,
    FilterCardComponent,
    FilterPipe,
    AsignaturaInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
