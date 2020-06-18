import { Component, OnInit } from '@angular/core';
import { OrdensService } from '../services/ordens.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
  public infos: any;
  public IdOrdem: any;
  public orderProd: any;

  constructor(
    private ordensService: OrdensService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(


  ) {
    this.IdOrdem = parseInt(this.activatedRoute.snapshot.url[1].path)

    this.ordensService.getOrders().subscribe(
      (data) => {
        this.infos = data.filter(value => value.id_ordem == this.IdOrdem)[0]
        console.log(this.infos)
      },
    )
    this.getProdByOrder()
    setTimeout(() => {
      window.print()
    }, 2000);

  }

  private getProdByOrder(): void {
    this.ordensService.getProdutoByOrdem(this.IdOrdem).subscribe(
      (data) => {
        this.orderProd = data
        console.log(data)
      },
      (err) => { console.log(err) }
    )
  }

}
