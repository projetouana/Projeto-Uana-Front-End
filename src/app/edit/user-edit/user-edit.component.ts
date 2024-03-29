import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  usuario: Usuario = new Usuario()
  idUser: number
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authservice: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(){
    window.scroll(0, 0)

    if(environment.token == ''){
      alert('Sua sessão expirou. Faça o login novamente')
      this.router.navigate(['/login'])
    }

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  atualizar(){
    this.usuario.tipo = this.tipoUsuario

    if(this.usuario.senha != this.confirmarSenha){
      alert('As senha estão incorretas.')
    }else{
      this.authservice.atualizar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/inicio'])
        alert('Usuario atualizado com sucesso! Faça o login novamente')
        environment.token = ''
        environment.foto = ''
        environment.nome = ''
        environment.id = 0
        this.router.navigate(['/login'])
      })
    }
  }

  findByIdUser(id: number){
    this.authservice.getByIdUser(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

}
