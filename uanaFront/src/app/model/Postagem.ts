import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{
    public id: number
    public imgUrl: string
    public texto: string
    public dataPublic: Date
    public contato: string

    public usuario: Usuario

    public tema: Tema
}