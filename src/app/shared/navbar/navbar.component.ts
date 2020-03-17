import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { MenuDialogComponent } from './dialogs/menu-dialog/menu-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public nome: string
  public permission: string
  public tab: string
  constructor(

    private CookieService: CookieService,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.permission = this.CookieService.get('permission')
    this.nome = this.CookieService.get('nome')

    this.tab = this.activatedRoute.snapshot.url[0].path

  }

  setPermission(value) {

    this.permission = value
  }

  onClick() {
    this.matDialog.open(MenuDialogComponent)
  }
}
