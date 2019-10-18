import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {Funcionario} from './model/user_model'
import { LoginService } from '../services/login.service';
import { OrdensService } from '../services/ordens.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public formNew:FormGroup
  public logins:object[]=[]
  public cargos:any[]=[] 
  constructor(

    private formBuilder:FormBuilder,
    private loginService:LoginService,
    private orderService:OrdensService
  ) { }

  ngOnInit() {
    this.getLogin()
    this.formNew = this.formBuilder.group({
      id_funcionario:[null],
      nome_Funcionario:[null,Validators.minLength(1)],
      email_Funcionario:[null,Validators.email],
      telefone_Funcionario:[null,Validators.min(1)],
      cargo_Funcionario:[null],
      usuario:[null],
      senha:[null]
   })

  this.orderService.getCargos().subscribe(value => {
    this.cargos = value
    console.log(value)
  })

   
  }
  
  getLogin(){

    this.loginService.getLogin().subscribe(value => {
      this.logins = value
      console.log(value)
    
    })
  }
  postLogin(){

    console.log(this.formNew.getRawValue())

    this.loginService.postLogin(this.formNew.getRawValue()).subscribe(

      (data)=>{},
      (err)=>{console.log(err)},
      () =>{


        this.getLogin()
        this.formNew.reset()
      }
    )

  }
}
