import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formBuilder:FormBuilder = new FormBuilder();
  form:FormGroup = this.formBuilder.group({
    email: [null,[Validators.required, Validators.email]],
    password: [null,[Validators.required]]
  });
  alert:string = '';

  constructor(
    private loginService:LoginService,
    private router:Router
    ) { }

  ngOnInit(): void {
    if (this.loginService.isAuth()) {
      this.router.navigate(['']);
    }
  }

  login() {
    this.loginService.login(this.form.value).subscribe({
      next: (value:any) => {
        localStorage.setItem('token', value.token);
        this.router.navigate(['/']);
      },
      error: (e) => {
        this.alert = 'El email o el password es incorrecto.';
      }
    });
  }

}
