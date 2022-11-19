import { CategoriaModel } from "../categoria/categoria.models";

export class Cliente{
    id:number;
    nome: string;
    numCarteirinha: number;
    password: string;
    role: string;
    categoria: CategoriaModel;


    constructor(){
        this.id = 0,
        this.nome = '',
        this.numCarteirinha = 0,
        this.password = '',
        this.role = '',
        this.categoria = new CategoriaModel()
    }


}
