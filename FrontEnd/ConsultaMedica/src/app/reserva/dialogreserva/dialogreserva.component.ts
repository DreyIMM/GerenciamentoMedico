import { Component, OnInit } from '@angular/core';
import { DreservaserviceService } from './dreservaservice.service';
import { FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';
import { Reserva } from './reserva.models';
import * as moment from 'moment';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialogreserva',
  templateUrl: './dialogreserva.component.html',
  styleUrls: ['./dialogreserva.component.css']
})
export class DialogreservaComponent implements OnInit {

  medicos: Array<any> = new Array();
  clientes: Array<any> = new Array();
  reservaForm !: FormGroup
  reserva: Reserva = new Reserva;
  constructor(private DreservaserviceService: DreservaserviceService,private formBuilder: FormBuilder, private dialogRef: MatDialogRef<DialogreservaComponent>) { }

  ngOnInit(): void {
    this.listarClientes();
    this.listarMedicos();
    this.reservaForm = this.formBuilder.group({
      cliente : ['', Validators.required],
      medico : ['', Validators.required],
      horaInicio : ['', Validators.required],
      data :['' ,Validators.required]
    })
  }


  listarMedicos(){
    this.DreservaserviceService.listarMedicos().subscribe(medicos =>{
        this.medicos = medicos;
    }, err=>{
      console.log("Erro ao listar os medicos", err);
    })    
  }

  listarClientes(){
    this.DreservaserviceService.listarClientes().subscribe(cli =>{
      this.clientes = cli;
    }, err=>{
      console.log("Erro ao listar os medicos", err);
    })
  }
  

  addReserva(){
    this.reserva.cliente.id = this.reservaForm.value.cliente;
    this.reserva.data = moment(this.reservaForm.value.data).format("DD/MM/yyyy",);
    this.reserva.medico.crm = this.reservaForm.value.medico ;
    this.reserva.horaInicio = this.reservaForm.value.horaInicio;
    
    this.DreservaserviceService.cadastrarReserva(this.reserva).subscribe(reserva=>{
    this.reservaForm.reset();
    this.dialogRef.close();
    }, err =>{
      console.log(this.reserva)
      console.log('Erro ao salvar reserva' ,err);
    })
  }
}
