import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public nome:string
  public permission :string
  public tab:string
  constructor( 
    
    private CookieService:CookieService,
    private activatedRoute:ActivatedRoute
    ){ }

  ngOnInit() {
    this.permission = this.CookieService.get('permission')
    this.nome = this.CookieService.get('nome')

    this.tab = this.activatedRoute.snapshot.url[0].path
    console.log(this.tab)
  }

}
