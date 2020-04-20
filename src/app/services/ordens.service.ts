import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../ordens/models/order_model';
import { produto } from '../produtos/models/produto_model';

@Injectable({
  providedIn: 'root'
})
export class OrdensService {

  constructor(private http: HttpClient) { }
  private productNameURL = 'http://localhost:9095/ordens'
  getOrders(): Observable<Order[]> {
    return this.http.get<any[]>(this.productNameURL)
  }
  getProduto(): Observable<produto[]> {
    let url = 'http://localhost:9095/produtos'
    return this.http.get<produto[]>(url)
  }
  postProduto(form: produto) {
    let url = 'http://localhost:9095/produtos'
    return this.http.post<produto>(url, form)
  }
  removeProduto(id: number) {
    let url = `http://localhost:9095/remover-produtos/${id}`
    return this.http.delete<any>(url)
  }
  deleteProduto(id: number) {
    let url = `http://localhost:9095/produtos/${id}`
    return this.http.delete<any>(url)
  }
  addProduto(id: number) {
    let url = `http://localhost:9095/produtos/add/${id}`
    return this.http.delete<any>(url)
  }
  getCargos(): Observable<any[]> {
    let url = `http://localhost:9095/cargos`
    return this.http.get<any[]>(url)
  }
  postOrdens(ordens): Observable<any[]> {
    let url = `http://localhost:9095/cadastro-ordens`
    return this.http.post<any[]>(url, ordens)
  }
  deleteOrdem(ordem): Observable<any[]> {
    let url = `http://localhost:9095/cadastro-ordens/${ordem}`
    return this.http.delete<any[]>(url)
  }
  getProdutoByOrdem(id: number) {
    let url = `http://localhost:9095/get-prod-order/${id}`
    return this.http.get<any>(url)
  }
  cadastroProdutoOrdem(idProd: number, nomeProd: string, idOrder: number) {
    let url = `http://localhost:9095/cadastro-produto`
    let body = { idProd, nomeProd, idOrder }
    return this.http.post<any>(url, body)
  }
  removeProd(idProd: number, idProdOrder: number) {
    let url = `http://localhost:9095/delete-produto/${idProd}/${idProdOrder}`
    return this.http.delete<any>(url)
  }
}
