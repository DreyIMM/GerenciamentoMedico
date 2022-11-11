import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogreservaComponent } from './dialogreserva/dialogreserva.component';
import { DreservaserviceService } from './dialogreserva/dreservaservice.service';
import { ReservaService } from './reserva.service';
import { Reserva } from './dialogreserva/reserva.models';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  reservas: Reserva[] =[]

  constructor(private dialog: MatDialog, private DreservaserviceService: DreservaserviceService, private ReservaService: ReservaService) { }
  
  openDialog() {
    this.dialog.open(DialogreservaComponent, {
       width: '30%',
    }).afterClosed().subscribe(r=>{
      this.listarReservas();
    });
    
  }

  ngOnInit(): void {
    this.listarReservas();
  }

  listarReservas(){
    this.ReservaService.listarTodasReservas().subscribe(reserva =>{
      this.reservas = reserva
      console.log(reserva)
    }, err =>{
      console.log(err);
    })
  }

  


}

