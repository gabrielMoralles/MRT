import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../login/model/user_model';

headers: new HttpHeaders({ 'Content-Type': 'application/json' })

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private productNameURL = 'http://localhost:9095/login'; //URL to web api

  constructor(private http: HttpClient) { }


  getLogin(): Observable<Usuario[]> {
    return this.http.get<any[]>(this.productNameURL)
  }
  postLogin(login: Usuario) {
    let url = 'http://localhost:9095/login'

    return this.http.post<Usuario>(url, login)
  }
  forgotPass(email: string, user: Usuario) {
    let url = 'http://localhost:9095/forgot'
    let data = { email, user }
    return this.http.post<Usuario[]>(url, data)
  }
  postPass(pass: string, email: string, user: Usuario) {
    let url = 'http://localhost:9095/changePass'
    let data = { email, user, pass }
    return this.http.post<any>(url, data)
  }
}
