import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-forgot-password-dialog',
  templateUrl: './forgot-password-dialog.component.html',
  styleUrls: ['./forgot-password-dialog.component.css']
})
export class ForgotPasswordDialogComponent implements OnInit {
  public formForgot: FormGroup
  public try: boolean
  public auth: boolean
  public changed: boolean = false
  constructor(
    private MatDialogActions: MatDialog,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
    this.generateFormForgot()
  }

  ngOnInit() {
  }

  private generateFormForgot() {
    this.formForgot = this.fb.group({
      email: ['gabrel@email.com', Validators.required],
      user: ['gabriel.silva', Validators.required],
      senha: [null, Validators.required]
    })
  }

  public closeModal() {
    this.MatDialogActions.closeAll()
  }
  public sendForm() {
    this.loginService.
      forgotPass(this.formForgot.get('email').value, this.formForgot.get('user').value)
      .subscribe(
        value => {
          if (value.length) {
            this.try = true
            this.auth = true
          } else {
            this.try = true
            this.auth = false
          }
        }
      )
  }

  public postSenha() {
    this.loginService.
      postPass(this.formForgot.get('senha').value, this.formForgot.get('email').value, this.formForgot.get('user').value)
      .subscribe(
        value => {
          if (value.affectedRows) {
            this.changed = true
            // this.closeModal()
          }
        }
      )
  }

}
