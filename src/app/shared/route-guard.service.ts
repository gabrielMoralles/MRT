import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {
  public route : string

  constructor(
    private activatedRoute:ActivatedRoute,
    private cookieService:CookieService,
    private router:Router
  ) { }

    getGuard(route){
      if(this.getGuardProdutos(route) || this.getGuardUsers(route)){
        return true
      }else{
        return false
      }
    }

    getGuardProdutos(route:string){
      if(route == 'produtos' && this.cookieService.get('permission') == 'BASIC'){
        return true
      }else{
        return false
      }
    }
    getGuardUsers(route:string){
      if(route == 'users' && this.cookieService.get('permission') == 'BASIC'){
        return true
      }else{
        return false
      }
    }
}
