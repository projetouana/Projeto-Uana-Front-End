import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PonteComponent } from './ponte/ponte.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { TemaComponent } from './tema/tema.component';


const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch:'full'},

  {path:'Home', component: HomeComponent},
  {path:'ponte', component: PonteComponent},
  {path:'login', component: LoginComponent},
  {path:'cadastrar', component: CadastrarComponent},

  {path: 'inicio', component: InicioComponent},

  {path: 'tema', component: TemaComponent},

  {path:'sobre' , component:SobreNosComponent},

  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent},
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
