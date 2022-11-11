import { MedicoModel } from "src/app/medico/medico.models"
import { Cliente } from "src/app/cliente/cliente"

export class Reserva{
    id: number;
    cliente : Cliente;
    medico: MedicoModel;
    horaInicio: String;
    data: String;

    constructor(){
        this.id = 0;
        this.cliente = new Cliente(),
        this.medico = new MedicoModel()
        this.horaInicio = '',
        this.data = '';
    }
}