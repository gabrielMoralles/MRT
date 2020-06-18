import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from 'rxjs';
import { Funcionario } from '../../model/user_model';

@Injectable(

)
export class EmmitUserService {
    public $emmitSource = new BehaviorSubject({});

    constructor() { }

    setUser(user: Funcionario) {
        this.$emmitSource.next(user)
    }
}