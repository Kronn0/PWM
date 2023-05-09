import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formRegister: FormGroup

  constructor(

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
    
    console.log(this.formRegister.value)
  }

}
