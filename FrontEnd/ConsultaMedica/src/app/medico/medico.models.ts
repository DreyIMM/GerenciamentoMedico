import { CategoriaModel } from "../categoria/categoria.models";

export class MedicoModel{
    crm:number;
    nome:string;
    categoria: CategoriaModel

    constructor(){
        this.crm = 0;
        this.nome = "";
        this.categoria = new CategoriaModel();
    }
}