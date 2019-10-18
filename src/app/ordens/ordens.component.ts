import { Component, OnInit } from '@angular/core';
import { OrdensService } from '../services/ordens.service';
import { Order } from './models/order_model';
import { produto } from '../produtos/models/produto_model';
import { element } from 'protractor';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-ordens',
  templateUrl: './ordens.component.html',
  styleUrls: ['./ordens.component.css']
})
export class OrdensComponent implements OnInit {
  public orders: Order[]
  public produtos: produto[] = []
  public lst:string[]=[]
  public permission:string

  constructor(
    private orderService: OrdensService,
    private cookieService:CookieService

  ) { }

  ngOnInit() {

    this.permission = this.cookieService.get('permission')
    this.orderService.getOrders().subscribe(

      (data) => { this.orders = data },
      (err) => { },
      () => {

        console.log(this.orders)
      }

    )
  }
  obterInventario() {

    this.orderService.getProduto().subscribe(
      value => {
        value.forEach(element =>{
          if(element.qtd_Produto == 0){
            this.lst.push(element.nome_Produto)
          }
        })
        alert(`Os itens: ${this.lst} estão em falta.`)
      }
    
    )
  }
}