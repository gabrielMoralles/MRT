import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable(

)
export class emmitProductService {
    public $emmitSource = new BehaviorSubject({});

    constructor() { }

    setProduct(product: any) {
        this.$emmitSource.next(product)
    }

}