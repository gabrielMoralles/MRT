import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public nome:string
  public permission :string
  constructor( private CookieService:CookieService) { }

  ngOnInit() {
    this.permission = this.CookieService.get('permission')
    this.nome = this.CookieService.get('nome')
  }

}
