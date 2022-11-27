import { Component, OnInit } from '@angular/core';
import { DreservaserviceService } from './dreservaservice.service';
import { FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';
import { Reserva } from './reserva.models';
import * as moment from 'moment';
import { MatDialogRef } from '@angular/material/dialog';
import { ClienteLogado } from '../../cliente/clienteLogado';
import { LoginserviceService } from '../../login/loginservice.service';
import { MedicoModel } from 'src/app/medico/medico.models';

@Component({
  selector: 'app-dialogreserva',
  templateUrl: './dialogreserva.component.html',
  styleUrls: ['./dialogreserva.component.css']
})
export class DialogreservaComponent implements OnInit {

  horarioFixos: string[] = [];
  medicos: Array<any> = new Array();
  clientes: Array<any> = new Array();
  reservaForm !: FormGroup
  reserva: Reserva = new Reserva;
  public cliente: ClienteLogado = new ClienteLogado ;

  medico: MedicoModel[] = [];
  data: string = '';
  apresentaHoraio = false;

  constructor(private DreservaserviceService: DreservaserviceService,
    private formBuilder: FormBuilder,
     private dialogRef: MatDialogRef<DialogreservaComponent>,
     private login: LoginserviceService){ }

  ngOnInit(): void {    
    this.listarMedicos();
    this.cliente = this.login.cliente;
    if(this.cliente.role == "ADMIN") this.listarClientes();

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
    this.reserva.cliente.id = this.cliente.role == "ADMIN" ? this.reservaForm.value.cliente : this.cliente.id ;
    this.reserva.data = moment(this.reservaForm.value.data).format("yyy-MM-DD");
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

  medicoSelect(value: any){
    this.medico = value;
    if(!(this.data == '')) this.listarHorarioDisponiveis(this.medico, this.data);


  }

  dataSelect(value:any){
    this.data = moment(value).format("yyy-MM-DD");
    this.listarHorarioDisponiveis(this.medico, this.data);
    this.apresentaHoraio = true;
  }

  listarHorarioDisponiveis(medico:any, data:any){
      this.DreservaserviceService.retornarHorarioFree(medico,data).subscribe(horarioFree =>{
        this.horarioFixos = ["07:00", "08:00", "09:00" , "10:00" , "11:00" , "14:00" , "15:00" , "16:00"] ;
        this.horarioFixos = this.horarioFixos.filter((n)=>{
          return !horarioFree.includes(n);
        })

      }, err=>{
        console.log("Erro ao listar os horarios", err);
      })  
  }


}