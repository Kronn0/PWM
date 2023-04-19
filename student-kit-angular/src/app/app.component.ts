import { Component } from '@angular/core';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import {MatIconRegistry} from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private matIconRegistry: MatIconRegistry,
  private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      "calendar-clear",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/media/calendar-clear.svg"));
    this.matIconRegistry.addSvgIcon(
      "home",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/media/home.svg"));
    this.matIconRegistry.addSvgIcon(
      "id-card",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/media/id-card.svg"));
    this.matIconRegistry.addSvgIcon(

      "person-circle",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/media/person-circle.svg"));
    this.matIconRegistry.addSvgIcon(
      "school",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/media/school.svg"));
  }
  title = 'student-kit-angular';
}
