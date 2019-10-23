import { Component, OnInit } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { element } from 'protractor';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { Usuario } from './model/user_model';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteGuardService } from '../shared/route-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: any
  public users: Usuario[] = []
  public route: string
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private cookieService: CookieService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private routeGuard: RouteGuardService
  ) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({

      username: [null, Validators.required],
      password: [null, Validators.required]

    })


  }
  login() {

    this.loginService.getLogin().subscribe(

      (data) => { this.users = data },
      (err) => { },
      () => {
        let auth = false
        this.users.forEach(element => {
          console.log(element)
          if (this.loginForm.get('username').value === element.usuario && this.loginForm.get('password').value === element.senha) {

            auth = true
            this.cookieService.set('nome', element.nome_Funcionario)

            if (element.cargo_Funcionario == "Administrador") {
              this.cookieService.set('permission', "FULL")


            } else {
              this.cookieService.set('permission', "BASIC")


            }
            this.router.navigate(['home'])

          }

        })
        console.log(auth)
      }
    )


  }

}
