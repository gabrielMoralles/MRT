import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../ordens/models/order_model';
import { produto } from '../produtos/models/produto_model';
import { ambiente } from '../env'

@Injectable({
  providedIn: 'root'
})
export class OrdensService {
  private loginURL = ''
  constructor(private http: HttpClient) {

    ambiente == 'dev' ? this.loginURL = 'http://localhost:9095' : this.loginURL = 'http://ec2-18-230-148-207.sa-east-1.compute.amazonaws.com:9095'

  }
  getOrders(): Observable<Order[]> {
    let url = `${this.loginURL}/ordens`

    return this.http.get<any[]>(url)
  }
  getProduto(): Observable<produto[]> {
    let url = `${this.loginURL}/produtos`
    return this.http.get<produto[]>(url)
  }
  postProduto(form: produto) {
    let url = `${this.loginURL}/produtos`
    return this.http.post<produto>(url, form)
  }
  removeProduto(id: number) {
    let url = `${this.loginURL}/remover-produtos/${id}`
    return this.http.delete<any>(url)
  }
  deleteProduto(id: number) {
    let url = `${this.loginURL}/produtos/${id}`
    return this.http.delete<any>(url)
  }
  addProduto(id: number) {
    let url = `${this.loginURL}/produtos/add/${id}`
    return this.http.delete<any>(url)
  }
  getCargos(): Observable<any[]> {
    let url = `${this.loginURL}/cargos`
    return this.http.get<any[]>(url)
  }
  postOrdens(ordens): Observable<any[]> {
    let url = `${this.loginURL}/cadastro-ordens`
    return this.http.post<any[]>(url, ordens)
  }
  deleteOrdem(ordem): Observable<any[]> {
    let url = `${this.loginURL}/cadastro-ordens/${ordem}`
    return this.http.delete<any[]>(url)
  }
  getProdutoByOrdem(id: number) {
    let url = `${this.loginURL}/get-prod-order/${id}`
    return this.http.get<any>(url)
  }
  cadastroProdutoOrdem(idProd: number, nomeProd: string, idOrder: number) {
    let url = `${this.loginURL}/cadastro-produto`
    let body = { idProd, nomeProd, idOrder }
    return this.http.post<any>(url, body)
  }
  removeProd(idProd: number, idProdOrder: number) {
    let url = `${this.loginURL}/delete-produto/${idProd}/${idProdOrder}`
    return this.http.delete<any>(url)
  }
  updateProduct(idOrder: number, order: Order) {
    let url = `${this.loginURL}/update-produto/${idOrder}`
    return this.http.post<any>(url, order)
  }
  updateProductTotal(produto) {
    let url = `${this.loginURL}/update-produtos-total`
    return this.http.post<any>(url, produto)
  }
}
