import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../ordens/models/order_model';
import { produto } from '../produtos/models/produto_model';

@Injectable({
  providedIn: 'root'
})
export class OrdensService {

  constructor( private http: HttpClient ) { }
  private productNameURL = 'http://localhost:9095/ordens'
  getOrders(): Observable <Order[]> {
    return this.http.get<any[]>(this.productNameURL)
  }
  getProduto(): Observable <produto[]> {
    let url = 'http://localhost:9095/produtos'
    return this.http.get<produto[]>(url)
  }
  postProduto(form: produto) {
    let url = 'http://localhost:9095/produtos'
    return this.http.post<produto>(url,form)
  }
  deleteProduto(id:number) {
    let url = `http://localhost:9095/produtos/${id}`
    return this.http.delete<any>(url)
  }
  getCargos(): Observable <any[]> {
    let url = `http://localhost:9095/cargos`
    return this.http.get<any[]>(url)
  }
  postOrdens(ordens): Observable <any[]> {
    let url = `http://localhost:9095/cadastro-ordens`
    return this.http.post<any[]>(url,ordens)
  }
  deleteOrdem(ordem): Observable <any[]> {
    let url = `http://localhost:9095/cadastro-ordens/${ordem}`
    return this.http.delete<any[]>(url)
  }
  
}
