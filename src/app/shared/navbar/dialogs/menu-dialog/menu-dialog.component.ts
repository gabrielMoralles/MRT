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
}
