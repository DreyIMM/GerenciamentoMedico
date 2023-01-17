import { CategoriaModel } from "../categoria/categoria.models";

export class Cliente{
    id:number;
    nome: string;
    username: string;
    numCarteirinha: number;
    cpf: number;
    password: string;
    role: string;
    categoria: CategoriaModel;

    constructor(){
        this.id = 0,
        this.nome = '',
        this.username = '',
        this.numCarteirinha = 0,
        this.cpf = 0;
        this.password = '',
        this.role = '',
        this.categoria = new CategoriaModel()
    }


}
