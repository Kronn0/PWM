import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{

  formReg: FormGroup
  
  constructor(
    private userService: UserService,
    private http: HttpClient,
  ){
    this.formReg = new FormGroup({
      email: new FormControl(),
      username: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {}

  submitRegister(){
    console.log(this.formReg.value)
  }

  

}
