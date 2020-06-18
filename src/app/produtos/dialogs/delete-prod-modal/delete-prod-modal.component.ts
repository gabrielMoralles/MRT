import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { produto } from '../../models/produto_model';
import { emmitProductService } from '../../services/emmitProduct.service';
import { OrdensService } from 'src/app/services/ordens.service';

@Component({
  selector: 'app-delete-prod-modal',
  templateUrl: './delete-prod-modal.component.html',
  styleUrls: ['./delete-prod-modal.component.css']
})
export class DeleteProdModalComponent implements OnInit {

  public name = 0;
  public formNew: FormGroup;
  public produto: any;
  public produtos: produto[] = [];
  public route: string;
  public qtd = 0

  constructor(
    private MatDialog: MatDialogRef<DeleteProdModalComponent>,
    private formBuilder: FormBuilder,
    private emmitProduct: emmitProductService,
    private ordensService: OrdensService
  ) { }

  ngOnInit() {
    this.emmitProduct.$emmitSource.subscribe(
      value => {
        this.produto = value
        this.qtd = value['qtd_Produto']
        console.log(value)
        this.generateForm()
      }
    )
  }
  close(letter) {
    this.MatDialog.close(letter)
  }

  reduce() {
    if (this.qtd > 0) {
      this.qtd = this.qtd - 1
    }
  }
  raise() {
    this.qtd = this.qtd + 1
  }

  generateForm() {
    this.formNew = this.formBuilder.group({
      nome_Produto: [this.produto.nome_Produto, [Validators.required]],
      valor_Custo: [this.produto.valor_Custo, [Validators.min(1), Validators.required]],
      valor_Venda: [this.produto.valor_Venda, [Validators.min(1), Validators.required]],
      desc_Produto: [this.produto.desc_Produto, [Validators.max(255), Validators.required]],
      fl_ativo: [0],
    });
  }

  updateProduct() {
    let form = this.formNew.getRawValue()

    form['qtd_Produto'] = this.qtd
    form['id_estoque'] = this.produto['id_estoque']
    form['fl_ativo'] = this.produto['fl_ativo']
    console.log(form)
    this.ordensService.updateProductTotal(form).subscribe(
      (err) => { console.log(err) },
      (data) => { },
      () => {
        console.log('foi')
      }
    )
  }
}
