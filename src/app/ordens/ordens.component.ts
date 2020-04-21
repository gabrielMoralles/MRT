import { Component, OnInit } from '@angular/core';
import { OrdensService } from '../services/ordens.service';
import { Order } from './models/order_model';
import { produto } from '../produtos/models/produto_model';
import { element } from 'protractor';
import { CookieService } from 'ngx-cookie-service';
import { NavbarComponent } from '../shared/navbar/navbar.component'
import { MatDialog } from '@angular/material';
import { InventoryDialogComponent } from './dialogs/inventory-dialog/inventory-dialog.component';

@Component({
  selector: 'app-ordens',
  templateUrl: './ordens.component.html',
  styleUrls: ['./ordens.component.css']
})
export class OrdensComponent implements OnInit {
  public orders: Order[]
  public produtos: produto[] = []
  public lst: string[] = []
  public permission: string

  constructor(
    private orderService: OrdensService,
    private cookieService: CookieService,
    private navbar: NavbarComponent,
    private matDialogService: MatDialog

  ) { }

  ngOnInit() {

    this.permission = this.cookieService.get('permission')
    this.navbar.setPermission(this.permission)
    this.orderService.getOrders().subscribe(

      (data) => { this.orders = data },
      (err) => { },
      () => {

        console.log(this.orders)
      }

    )
  }
  obterInventario() {

    this.matDialogService.open(InventoryDialogComponent)
    // this.orderService.getProduto().subscribe(
    //   value => {
    //     value.forEach(element => {
    //       if (element.qtd_Produto == 0) {
    //         this.lst.push(element.nome_Produto)
    //       }
    //     })
    //     alert(`Os itens: ${this.lst} estão em falta.`)
    //   }

    // )
  }
}