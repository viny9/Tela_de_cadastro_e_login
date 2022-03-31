import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  hidePassword = true
  hidePasswordC = true

  email = new FormControl('', [Validators.required, Validators.email])
  name = new FormControl('', [Validators.required])
  password = new FormControl('', [Validators.required])
  cPassword = new FormControl('', [Validators.required])

  constructor() { }

  ngOnInit(): void {
  }

  errorMessageEmail() {
    if(this.email.hasError('email')) {
      return this.email.hasError('email')? 'Não é um email valido' : ''
    }
    return 'Campo não pode ficar vazio'
  }
  
  errorMessage() {
    return 'Campo não pode ficar vazio'
  }

  signIn() {
    if(this.email.invalid == true || this.name.invalid == true || this.password.invalid == true || this.cPassword.invalid == true) {
      return true
    } else {
      return false
    }
  }

}
