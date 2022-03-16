import { Postagem } from "./Postagem"

export class Usuario{

    public id: number
    public nome: string
    public foto: string
    public email: string
    public senha: string
    public tipo: string

    public postagem: Postagem[]
}