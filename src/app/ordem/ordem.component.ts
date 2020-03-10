import { Component, OnInit } from '@angular/core';
import { OrdensService } from '../services/ordens.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { produto } from '../produtos/models/produto_model';
import { element } from 'protractor';
import { Ordem } from '../services/model/ordem_model';
import { Order } from '../ordens/models/order_model';

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

  constructor(
    private formBuilder: FormBuilder,
    private orderServices: OrdensService,
    private activatedRoute: ActivatedRoute,
    private ordensService: OrdensService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.ordensService.getProduto().subscribe(value => this.produtos = value)
    this.IdOrdem = parseInt(this.activatedRoute.snapshot.url[1].path)
   

    this.formNew = this.formBuilder.group({

      preco: [null, [Validators.required]],
      cliente: [null],
      formaPag: [null],
      desc: [null],


    })
  }
  removerOrdem() {

    this.orderServices.deleteOrdem(this.IdOrdem).subscribe(

      (err) => { console.log(err) },
      (data) => { console.log(data) },
      () => {

        this.router.navigate(['/home'])
      }
    )

  }
  getOrdem() {

    this.ordensService.getOrders().subscribe(
      (data) => {
        data.forEach(element => {
          if (element.id == this.IdOrdem) {
            this.infos = element
            this.formNew.get('preco').setValue(element.valor)
            this.formNew.get('formaPag').setValue(element.form_pag)
            this.formNew.get('cliente').setValue(element.cliente)
            this.formNew.get('desc').setValue(element.desc)

          }

        }
        )
      },
      () => {
      }
    )
  }

  geraFormulario() {

    this.formNew = this.formBuilder.group({

      preco: [{ value: this.infos.valor }, [Validators.required]],
      cliente: [{ value: this.infos.cliente }],
      formaPag: [{ value: this.infos.form_pag }],
      desc: [{ value: this.infos.desc }],


    })
  }

}
