import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { EmmitUserService } from './service/emmitUser.service';
import { Funcionario } from '../model/user_model';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css']
})
export class EditUserModalComponent implements OnInit {
  public formNew: FormGroup
  public cargos: any[] = [
    'Gerente',
    'Usuario'
  ]

  public user: any;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private emmitUser: EmmitUserService,
    private matDialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getLogin()

  }
  getLogin() {

    this.emmitUser.$emmitSource.subscribe(user => {
      this.user = user;
      this.generateForm(user)
    })

  }

  generateForm(user) {
    let usuario = user
    console.log(usuario)
    this.formNew = this.formBuilder.group({
      id_Funcionario: [usuario.id_Funcionario],
      nome_Funcionario: [usuario.nome_Funcionario, [Validators.minLength(1), Validators.max(50), Validators.required]],
      email: [usuario.email, [Validators.email, Validators.required]],
      telefone_Funcionario: [usuario.telefone_Funcionario, [Validators.min(1), Validators.required]],
      cargo_Funcionario: [usuario.cargo_Funcionario, Validators.required],
      usuario: [usuario.usuario, Validators.required],
      senha: [usuario.senha, Validators.required]
    })


  }

  postLogin() {
    let form = this.formNew.getRawValue()

    this.loginService.updateLogin(form).subscribe(
      (err) => { console.log(err) },
      (data) => { console.log('data') },
      () => {
        this.matDialog.closeAll()
        this.snackBar.open('Usuário alterado com sucesso.', '', {
          duration: 2000,
        })
      }
    )
  }
  closeModal() {
    this.matDialog.closeAll()
  }
}
