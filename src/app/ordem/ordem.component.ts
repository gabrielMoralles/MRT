import { Component, OnInit } from '@angular/core';
import { OrdensService } from '../services/ordens.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { produto } from '../produtos/models/produto_model';

@Component({
  selector: 'app-ordem',
  templateUrl: './ordem.component.html',
  styleUrls: ['./ordem.component.css']
})
export class OrdemComponent implements OnInit {
  public formNew: FormGroup;
  public IdOrdem: number;
  public produtos: produto[]

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


    })
  }
  removerOrdem() {

    this.orderServices.deleteOrdem(this.IdOrdem).subscribe(

      (err) => { console.log(err) },
      (data) => { console.log(data) },
      () =>{

        this.router.navigate(['/home'])
      }
    )

  }

}
