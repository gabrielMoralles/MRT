import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";

import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { OrdensComponent } from "./ordens/ordens.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { ProdutosComponent } from "./produtos/produtos.component";
import { LoginModule } from "./login/login.module";
import { UserComponent } from "./user/user.component";
import { OrdemComponent } from "./ordem/ordem.component";
import { NovaOrdemComponent } from "./nova-ordem/nova-ordem.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "../assets/modules/material.module";
import { MenuDialogComponent } from './shared/navbar/dialogs/menu-dialog/menu-dialog.component';
import { DeleteProdModalComponent } from './produtos/dialogs/delete-prod-modal/delete-prod-modal.component';
import { InventoryDialogComponent } from './ordens/dialogs/inventory-dialog/inventory-dialog.component';
import { PrintComponent } from './print/print.component';
import { EditUserModalComponent } from './user/edit-user-modal/edit-user-modal.component';
import { EmmitUserService } from './user/edit-user-modal/service/emmitUser.service';

@NgModule({
  declarations: [
    AppComponent,
    OrdensComponent,
    NavbarComponent,
    ProdutosComponent,
    UserComponent,
    OrdemComponent,
    NovaOrdemComponent,
    MenuDialogComponent,
    DeleteProdModalComponent,
    InventoryDialogComponent,
    PrintComponent,
    EditUserModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoginModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MaterialModule,

  ],
  entryComponents: [MenuDialogComponent, DeleteProdModalComponent, InventoryDialogComponent, EditUserModalComponent],
  providers: [CookieService, NavbarComponent, EmmitUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
