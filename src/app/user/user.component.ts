import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Funcionario } from './model/user_model'
import { LoginService } from '../services/login.service';
import { OrdensService } from '../services/ordens.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteGuardService } from '../shared/route-guard.service';
import { MatDialog } from '@angular/material';
import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';
import { EmmitUserService } from './edit-user-modal/service/emmitUser.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public formNew: FormGroup
  public logins: object[] = []
  public route: string
  public cargos: any[] = [
    'Gerente',
    'Usuario'
  ]


  constructor(

    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private orderService: OrdensService,
    private activatedRoute: ActivatedRoute,
    private routeGuard: RouteGuardService,
    private router: Router,
    private matDialog: MatDialog,
    private emmitUser: EmmitUserService
  ) { }

  ngOnInit() {

    this.route = this.activatedRoute.snapshot.url[0].path
    let perm = this.routeGuard.getGuard(this.route)
    if (perm) {
      this.router.navigate(['home'])
    }

    this.getLogin()
    this.formNew = this.formBuilder.group({
      id_Funcionario: [null],
      nome_Funcionario: [null, [Validators.minLength(1), Validators.max(50), Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      telefone_Funcionario: [null, [Validators.min(1), Validators.required]],
      cargo_Funcionario: [null, Validators.required],
      usuario: [null, Validators.required],
      senha: [null, Validators.required]
    })
  }


  getLogin() {

    this.loginService.getLogin().subscribe(value => {
      this.logins = value
      console.log(value)

    })
  }
  postLogin() {

    console.log(this.formNew.getRawValue())

    this.loginService.postLogin(this.formNew.getRawValue()).subscribe(

      (data) => { },
      (err) => { console.log(err) },
      () => {


        this.getLogin()
        this.formNew.reset()
      }
    )

  }
  onChange(event: Event): void {
    console.log(event)
  }

  openEditModal(user: Funcionario) {
    this.emmitUser.setUser(user)
    this.matDialog.open(EditUserModalComponent)
  }
}
