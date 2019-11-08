import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdensService } from '../services/ordens.service';
import { produto } from './models/produto_model'
import { ToastrService } from 'ngx-toastr';

// import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public formNew: FormGroup
  public produto: produto
  public produtos: produto[] = []
  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private orderServices: OrdensService

  ) { }

  ngOnInit() {

    // this.showSuccess();    
    this.formNew = this.formBuilder.group({

      nome_Produto: [null, [Validators.required]],
      valor_Custo: [null, [Validators.min(1)]],
      valor_Venda: [null, [Validators.min(1)]],
      qtd_Produto: [null, Validators.min(1)],
      descricao_Produto: [null, Validators.max(255)],
      id_FornecedorProduto: [null]

    })
    this.getProdutos()

  }

  showSuccess(produto) {
    this.toastr.info(
      produto,'Produto acabando :');
  }

  registrarProduto() {

    let form = this.formNew.getRawValue()
    this.produto = form
    this.orderServices.postProduto(this.produto).subscribe(

      (data) => { console.log(data) },
      (err) => { console.log(err) },
      () => {

        this.getProdutos()
      }
    )

  }

  getProdutos() {

    this.orderServices.getProduto().subscribe(

      (data) => { this.produtos = data },
      (err) => { console.log(err) },
      () => {
        this.produtos.forEach(value =>{

            if(value.qtd_Produto < 3){
              this.showSuccess(value.nome_Produto)
            }
        })
      }
    )
  }
  deleteProduto(id: number, qtd: number) {

    if (qtd > 0) { 
    this.orderServices.deleteProduto(id).subscribe(

      (data) => { },
      (err) => { console.log(err) },
      () => {

        this.getProdutos()
      }

    )
    }
  }
}
