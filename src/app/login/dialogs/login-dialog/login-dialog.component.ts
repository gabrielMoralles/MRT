import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  constructor(
    private Dialog: MatDialog
  ) { }

  ngOnInit() {

  }
  onClick() {
    this.Dialog.closeAll()
  }
}
