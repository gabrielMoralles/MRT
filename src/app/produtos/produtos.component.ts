import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OrdensService } from "../services/ordens.service";
import { produto } from "./models/produto_model";
import { RouteGuardService } from "../shared/route-guard.service";
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { DeleteProdModalComponent } from './dialogs/delete-prod-modal/delete-prod-modal.component';
import { emmitProductService } from './services/emmitProduct.service';

// import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: "app-produtos",
  templateUrl: "./produtos.component.html",
  styleUrls: ["./produtos.component.css"]
})
export class ProdutosComponent implements OnInit {
  public formNew: FormGroup;
  public produto: produto;
  public produtos: produto[] = [];
  public route: string;
  constructor(
    private formBuilder: FormBuilder,
    private orderServices: OrdensService,
    private routeGuard: RouteGuardService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private MatDialog: MatDialog,
    private snackBar: MatSnackBar,
    private emmitProduct: emmitProductService
  ) { }

  ngOnInit() {
    this.route = this.activatedRoute.snapshot.url[0].path;
    let perm = this.routeGuard.getGuard(this.route);
    if (perm) {
      this.router.navigate(["home"]);
    }
    // if (this.routeGuard.getGuard(this.route).subscribe) {

    //
    // }
    this.formNew = this.formBuilder.group({
      nome_Produto: [null, [Validators.required]],
      valor_Custo: [null, [Validators.min(1), Validators.required]],
      valor_Venda: [null, [Validators.min(1), Validators.required]],
      qtd_Produto: [null, [Validators.min(1), Validators.required]],
      desc_Produto: [null, [Validators.max(255), Validators.required]],
      fl_ativo: [0],
    });
    this.getProdutos();
  }
  registrarProduto() {
    let form = this.formNew.getRawValue();
    this.produto = form;
    this.orderServices.postProduto(this.produto).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      },
      () => {
        this.getProdutos();
      }
    );
  }

  getProdutos() {
    this.orderServices.getProduto().subscribe(
      data => {
        this.produtos = data.filter(data => data.fl_ativo > 0)
        console.log(this.produtos)
      },
      err => {
        console.log(err);
      },
      () => { }
    );
  }
  deleteProduto(id: number, qtd: number) {
    console.log(id);
    if (qtd > 0) {
      this.orderServices.deleteProduto(id).subscribe(
        data => {
          this.getProdutos();
        },
        err => {
          console.log(err);
        },
        () => {
          this.getProdutos();
        }
      );
    }
  }
  addProduto(id: number, qtd: number) {
    console.log(id);
    this.orderServices.addProduto(id).subscribe(
      data => { },
      err => {
        console.log(err);
      },
      () => {
        this.getProdutos();
      }
    );
  }
  deleteRow(produto) {
    let id = produto['id_estoque']
    const DialogConfig = new MatDialogConfig();
    DialogConfig.data = {
      name: produto
    }
    this.emmitProduct.setProduct(produto)

    var openDialog = this.MatDialog.open(DeleteProdModalComponent, DialogConfig).afterClosed().subscribe(value => {
      if (value == 'a') {
        this.orderServices.removeProduto(id).subscribe(
          (err) => { console.log(err) },
          (data) => { },
          () => {
            this.orderServices.getProduto().subscribe(value => {
              this.snackBar.open('Produto removido com sucesso.', '', {
                duration: 2000,
              })
              this.getProdutos()
            })
          }
        )
      }
      this.getProdutos()

    })
    console.log(produto)
  }
}
