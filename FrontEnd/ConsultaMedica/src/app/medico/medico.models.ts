import { CategoriaModel } from "../categoria/categoria.models";

export class MedicoModel{
    id: number | undefined;
    username: string;
    password: string;
    role: string;
    crm:number;
    nome:string;
    categoria: CategoriaModel

    constructor(){
        this.username = "";
        this.password = "";
        this.role = "";
        this.crm = 0;
        this.nome = "";
        this.categoria = new CategoriaModel();
    }
}