import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogClienteComponent } from "src/app/cliente/dialogCliente/dialogCliente.component";
import { LoginComponent } from "../login.component";

@Component({
    selector: 'app-dialoglogin',
    templateUrl: './dialogLogin.component.html',
    styleUrls: ['./dialogLogin.component.css']
})

export class DialogLoginComponent{
    constructor(
        private dialogRef: MatDialogRef<DialogClienteComponent>,
        @Inject(MAT_DIALOG_DATA)public data:LoginComponent
        ) { }

}