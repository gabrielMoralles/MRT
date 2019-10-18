import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrdensService } from '../services/ordens.service';
import { produto } from '../produtos/models/produto_model';

@Component({
  selector: 'app-nova-ordem',
  templateUrl: './nova-ordem.component.html',
  styleUrls: ['./nova-ordem.component.css']
})
export class NovaOrdemComponent implements OnInit {

  public formNew: FormGroup;
  public IdOrdem: number;
  public produtos: produto[];



  constructor(
    private formBuilder: FormBuilder,
    private orderServices: OrdensService,
    private activatedRoute:ActivatedRoute,
    private ordensService : OrdensService
  ) { }

  ngOnInit() {
    this.ordensService.getProduto().subscribe( value =>this.produtos = value )

    // this.IdOrdem = parseInt(this.activatedRoute.snapshot.url[1].path)
    this.formNew = this.formBuilder.group({

      cliente: [null, [Validators.required]],
      // data_pag
      // valor
      // forma_pag:
      // desc
    })
  }


}


