import { Component, OnInit } from '@angular/core';
import { OrdensService } from '../services/ordens.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { produto } from '../produtos/models/produto_model';
import { element } from 'protractor';
import { Ordem } from '../services/model/ordem_model';
import { Order } from '../ordens/models/order_model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-ordem',
  templateUrl: './ordem.component.html',
  styleUrls: ['./ordem.component.css']
})
export class OrdemComponent implements OnInit {
  public formNew: FormGroup;
  public IdOrdem: number;
  public produtos: produto[];
  public infos: Order;

  public orderProd = []

  constructor(
    private formBuilder: FormBuilder,
    private orderServices: OrdensService,
    private activatedRoute: ActivatedRoute,
    private ordensService: OrdensService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.getOrdem()
    this.geraFormulario()

  }

  ngOnInit() {
    // this.getOrdem()
    this.getProdutos()
    this.IdOrdem = parseInt(this.activatedRoute.snapshot.url[1].path)
    this.getProdByOrder()

  }

  private getProdutos() {
    this.ordensService.getProduto().subscribe(value => {
      this.produtos = value.filter(prod => prod.qtd_Produto > 0)

    })
  }

  private getProdByOrder(): void {
    this.orderServices.getProdutoByOrdem(this.IdOrdem).subscribe(
      (data) => { this.orderProd = data },
      (err) => { console.log(err) }
    )
  }

  public cadastrarProduto(): void {
    const form = this.formNew.getRawValue()
    let filter = this.produtos.filter(prod => prod.nome_Produto == form.prod)
    let produto = filter[0]
    this.orderServices.cadastroProdutoOrdem(produto.id_estoque, produto.nome_Produto, this.IdOrdem).subscribe(
      (data) => {
        this.getProdutos()
        this.getProdByOrder()
      },
      (err) => { console.log(err) },
      () => {
      }
    )
  }
  public removerOrdem(): void {
    this.orderServices.deleteOrdem(this.IdOrdem).subscribe(
      (err) => { console.log(err) },
      (data) => { console.log(data) },
      () => {
        this.snackBar.open('Ordem removida com sucesso.', '', {
          duration: 2000,
        })
        this.router.navigate(['/home'])
      }
    )
  }

  public getOrdem(): void {
    this.ordensService.getOrders().subscribe(
      (data) => {
        console.log(data)
        this.infos = data.filter(value => value.id_ordem == this.IdOrdem)[0]
        this.patchForm()

      },
    )
  }

  private patchForm(): void {
    this.formNew.get('preco').setValue(this.infos.valor)
    this.formNew.get('cliente').setValue(this.infos.nome_Cliente)
    this.formNew.get('formaPag').setValue(this.infos.forma_pgto)
    this.formNew.get('desc').setValue(this.infos.desc)

  }


  private geraFormulario(): void {
    this.formNew = this.formBuilder.group({
      preco: [null, [Validators.required]],
      cliente: [null],
      formaPag: [null],
      desc: [null],
      prod: [null]
    })

  }

  public deleteProd(id: number, id_Prod: number): void {
    this.ordensService.removeProd(id, id_Prod).subscribe(
      (data) => { this.getProdByOrder() },
      (err) => {
        console.log(err)
      },
      () => {

      }
    )
  }
  public updateOrder() {
    let order = this.infos
    order.forma_pgto = this.formNew.get('formaPag').value;
    order.valor = this.formNew.get('preco').value;
    order.nome_Cliente = this.formNew.get('cliente').value;
    order.desc = this.formNew.get('desc').value;

    this.ordensService.updateProduct(this.IdOrdem, order).subscribe(
      (err) => {
        console.log(err)
      },
      (data) => {

      },
      () => {
        this.snackBar.open('Informações alteradas com sucesso.', '', {
          duration: 2000,
        })
      }
    )
    console.log(order);
  }
}
