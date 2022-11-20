export class ClienteLogado {
    id: string
    nome: string
    username: string
    role: string
    constructor(id = "", nome = "", username = "", role = ""){
        this.id = id;
        this.nome = nome;
        this.username = username;
        this.role = role;
    }
}
