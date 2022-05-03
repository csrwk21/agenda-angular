import { Byte } from "@angular/compiler/src/util";
import { Endereco } from "./endereco.model";

export class Quadra {
    nome : string;
    qtdPessoas : number;
    ra : Array<any>;
    endereco : Endereco;
    foto : Byte;
}