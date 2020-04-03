import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../login/model/user_model';

headers: new HttpHeaders({ 'Content-Type': 'application/json' })

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private productNameURL = 'http://ec2-3-16-206-59.us-east-2.compute.amazonaws.com:9095/login'; //URL to web api

  constructor(private http: HttpClient) { }


  getLogin(): Observable<Usuario[]> {
    return this.http.get<any[]>(this.productNameURL)
  }
  postLogin(login: Usuario) {
    let url = 'http://ec2-3-16-206-59.us-east-2.compute.amazonaws.com:9095/login'

    return this.http.post<Usuario>(url, login)
  }
}
