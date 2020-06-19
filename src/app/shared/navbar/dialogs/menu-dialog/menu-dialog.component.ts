import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.css']
})
export class MenuDialogComponent implements OnInit {

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private dialogService: MatDialog
  ) { }

  ngOnInit() {

  }
  logout() {
    this.cookieService.deleteAll()
    this.router.navigate(['/'])
    this.dialogService.closeAll()
  }
  goToGrafana() {
    window.open("http://ec2-18-230-148-207.sa-east-1.compute.amazonaws.com:3000/?orgId=1")
  }
  openManual() {
    window.open('https://docs.google.com/document/d/e/2PACX-1vR4i-gvP-sBtx2jRUzpsdo_TrqxesZVvn5n-q1HsGpNE0CdE70_i5lbsFbl2dNl7C4IYqu98c_3TdzH/pub')
  }
}
