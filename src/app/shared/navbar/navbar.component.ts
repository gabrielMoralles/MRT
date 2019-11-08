import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public nome:string
  constructor( private CookieService:CookieService) { }

  ngOnInit() {

    this.nome = this.CookieService.get('nome')
  }

}
