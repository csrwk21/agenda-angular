import { Endereco } from "./endereco.model";

export class Solicitante {
    id: number;
    nome : string;
    cpf : string;
    rg : string;
    dataNascimento : Date;
    email: string;
    telefone : string;
    endereco : Endereco;
    dtRegistro : Date;
}