import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string
  tipoUser: string
  userLogin: UserLogin = new UserLogin

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }
  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  tipoUsuario(event: any){
    this.tipoUser = event.target.value
  }

  cadastrar(){
    this.usuario.tipo = this.tipoUser

    if(this.usuario.senha !=  this.confirmarSenha){
      alert('As senhas estão incorretas!')
    } else{ this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp
      alert('Usuário cadastrado com sucesso!')})
      
        this.router.navigate(['/login'])
    }
  }
}
