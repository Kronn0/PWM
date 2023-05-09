import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formRegister: FormGroup

  constructor(
    private userService: UserService,
    private router: Router,
  ) {
    this.formRegister = new FormGroup({
      email: new FormControl(),
      username: new FormControl(),
      password: new FormControl()
    })
   }

  ngOnInit() {
  }

  submitRegister(){
    this.userService.register(this.formRegister.value)
    .then(response =>  {
      this.router.navigate(['/auth/login'])

    })
  }

}
