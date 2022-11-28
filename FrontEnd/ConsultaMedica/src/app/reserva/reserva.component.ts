import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogreservaComponent } from './dialogreserva/dialogreserva.component';
import { DreservaserviceService } from './dialogreserva/dreservaservice.service';
import { ReservaService } from './reserva.service';
import { Reserva } from './dialogreserva/reserva.models';
import { ClienteLogado } from '../cliente/clienteLogado';
import { LoginserviceService } from '../login/loginservice.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  reserva: Reserva = new Reserva();
  reservas: Reserva[] =[]

  public cliente: ClienteLogado = new ClienteLogado ;

  constructor(private dialog: MatDialog, private DreservaserviceService: DreservaserviceService, private ReservaService: ReservaService, private login:LoginserviceService) { }
  
  openDialog() {
    this.dialog.open(DialogreservaComponent, {
       width: '30%',
    }).afterClosed().subscribe(r=>{
      this.cliente.role == "USER" ? this.reservarFetchPaciente(): this.listarReservas();
    });
    
  }

  ngOnInit(): void {
    this.cliente = this.login.cliente;
    this.cliente.role == "USER" ? this.reservarFetchPaciente(): this.listarReservas();
  }

  listarReservas(){
    this.ReservaService.listarTodasReservas().subscribe(reserva =>{
      this.reservas = reserva
    }, err =>{
      console.log(err);
    })
  }

  reservarFetchPaciente(){
    this.ReservaService.reservaFetchPaciente(this.cliente.id).subscribe(result =>{
      this.reservas = result;
    })
  }  

  excluirReserva(id: number){
    this.ReservaService.excluirReserva(id).subscribe(reserva =>{
      this.listarReservas();
    },err=>{
      alert("Consulta não excluida");
    })

  }


}

