import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../login/model/user_model';
import { ambiente } from '../env'

headers: new HttpHeaders({ 'Content-Type': 'application/json' })

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginURL = ''


  constructor(private http: HttpClient,

  ) {
    ambiente == 'dev' ? this.loginURL = 'http://localhost:9095' : this.loginURL = 'http://ec2-54-233-179-45.sa-east-1.compute.amazonaws.com:9095'
  }


  getLogin(): Observable<Usuario[]> {
    let url = `${this.loginURL}/login`
    return this.http.get<any[]>(url)
  }
  postLogin(login: Usuario) {
    let url = `${this.loginURL}/login`

    return this.http.post<Usuario>(url, login)
  }
  forgotPass(email: string, user: Usuario) {
    let url = `${this.loginURL}/forgot`
    let data = { email, user }
    return this.http.post<Usuario[]>(url, data)
  }
  postPass(pass: string, email: string, user: Usuario) {
    let url = `${this.loginURL}/changePass`
    let data = { email, user, pass }
    return this.http.post<any>(url, data)
  }
}
