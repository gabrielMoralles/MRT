import { Component, OnInit } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { element } from 'protractor';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { Usuario } from './model/user_model';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteGuardService } from '../shared/route-guard.service';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from './dialogs/login-dialog/login-dialog.component';
import { ForgotPasswordDialogComponent } from './forgot-password-dialog/forgot-password-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: any;
  public users: Usuario[] = [];
  public route: string;
  public spinner: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private cookieService: CookieService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private routeGuard: RouteGuardService,
    private dialogService: MatDialog
  ) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({

      username: [null, Validators.required],
      password: [null, Validators.required]

    })
    if (this.cookieService.get('permission')) {
      this.router.navigate(['home'])
    }

  }
  login() {
    this.spinner = true
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

            if (element.cargo_Funcionario == "Gerente") {
              this.cookieService.set('permission', "FULL")


            } else {
              this.cookieService.set('permission', "BASIC")


            }
            this.router.navigate(['home'])


          } else {
            // alert('Usuário ou senha inválidos')
            this.dialogService.open(LoginDialogComponent, {
              width: '340px',
            })
          }

        })
        // console.log(auth)
      }
    )


  }
  public openForgotPassword(): void {
    this.dialogService.open(ForgotPasswordDialogComponent, {
      width: '600px',
    })

  }

}
