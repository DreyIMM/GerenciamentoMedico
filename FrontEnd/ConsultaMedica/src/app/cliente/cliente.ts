import { CategoriaModel } from "../categoria/categoria.models";

export class Cliente{
    id:number;
    nome: string;
    numCarteirinha: number;
    categoria: CategoriaModel;

    constructor(){
        this.id = 0,
        this.nome = '',
        this.numCarteirinha = 0,
        this.categoria = new CategoriaModel()
    }


}
