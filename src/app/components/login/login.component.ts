import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true
  userName = new FormControl('', [Validators.required])
  password = new FormControl('', [Validators.required])

  constructor() { }

  ngOnInit(): void {
  }

  errorMessage() {
    return 'Campo não pode ficar vazio'
  }

  login() {
    if(this.userName.invalid == true || this.password.invalid == true) {
      return true
    }else {
      return false
    }
  }

}
