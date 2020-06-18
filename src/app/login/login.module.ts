import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

import { MaterialModule } from 'src/assets/modules/material.module';
import { LoginDialogComponent } from './dialogs/login-dialog/login-dialog.component';
import { ForgotPasswordDialogComponent } from './forgot-password-dialog/forgot-password-dialog.component';
@NgModule({
    declarations: [LoginComponent, LoginDialogComponent, ForgotPasswordDialogComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    exports: [LoginComponent],
    entryComponents: [LoginDialogComponent, ForgotPasswordDialogComponent]
})
export class LoginModule { }