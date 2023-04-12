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
import { AsignaturaInfoComponent } from './asignaturas/pages/asignatura-info/asignatura-info.component';
import { InformationCardComponent } from './asignaturas/pages/asignatura-info/pages/information-card/information-card.component';
import { AuthModule } from './auth/auth.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularSvgIconModule } from 'angular-svg-icon';

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
    InformationCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    AuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
