import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarComponent } from './ingresar/ingresar.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { ChatearComponent } from './chatear/chatear.component';

// http:localhost:4200/ingresar
const routes: Routes = [
  {path:'ingresar', component:IngresarComponent},
  {path:'', redirectTo:'ingresar', pathMatch:'full'},
  {path:'usuario-lista', component:UsuarioListaComponent},
  {path:'chatear', component:ChatearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
