import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private ordensService : OrdensService,
    private router:Router

  ) { }

  ngOnInit() {
    this.ordensService.getProduto().subscribe( value =>this.produtos = value )

    // this.IdOrdem = parseInt(this.activatedRoute.snapshot.url[1].path)
    this.formNew = this.formBuilder.group({
      cliente: [null, [Validators.required]],
      data_pag:[null,Validators.required],
      valor:[null,Validators.min(1)],
      form_pag:[null,Validators.required],
      desc:[null]
    })
  }

  register(){

    let data = this.formNew.getRawValue()

    this.ordensService.postOrdens(data).subscribe(

      (err) =>{},
      (data) =>{},
      () =>{

        this.router.navigate(['home'])
      }
    )

  }

}


