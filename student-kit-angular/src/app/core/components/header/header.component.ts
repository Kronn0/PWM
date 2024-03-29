import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private userService: UserService,
    private router: Router,
    ){}

  onClick(){
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/login'])
      })
      .catch(error => console.log(error))
  }
}
