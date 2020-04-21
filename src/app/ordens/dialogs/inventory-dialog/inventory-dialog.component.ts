import { Component, OnInit } from '@angular/core';
import { OrdensService } from 'src/app/services/ordens.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-inventory-dialog',
  templateUrl: './inventory-dialog.component.html',
  styleUrls: ['./inventory-dialog.component.css']
})
export class InventoryDialogComponent implements OnInit {
  private lst = []
  constructor(
    private orderService: OrdensService,
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.obterInventario()
  }

  obterInventario() {

    this.orderService.getProduto().subscribe(
      value => {
        value.forEach(element => {
          if (element.qtd_Produto == 0) {
            this.lst.push(element.nome_Produto)
          }
        })
      }

    )
  }
  closeModal() {
    this.matDialog.closeAll()
  }
}
