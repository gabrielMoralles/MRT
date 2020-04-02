import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-prod-modal',
  templateUrl: './delete-prod-modal.component.html',
  styleUrls: ['./delete-prod-modal.component.css']
})
export class DeleteProdModalComponent implements OnInit {
  public name = 0
  constructor(
    private MatDialog: MatDialogRef<DeleteProdModalComponent>
  ) { }

  ngOnInit() {
  }
  close(letter) {
    this.MatDialog.close(letter)
  }
}
