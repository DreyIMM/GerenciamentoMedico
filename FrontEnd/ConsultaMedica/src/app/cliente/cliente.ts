import { CategoriaModel } from "../categoria/categoria.models";

export interface Cliente{
    id:number,
    nome: string,
    numCarteirinha: number,
    categoria: CategoriaModel;
}
