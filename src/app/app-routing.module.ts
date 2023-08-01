import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarComponent } from './ingresar/ingresar.component';

// http:localhost:4200/ingresar
const routes: Routes = [
  {path:'ingresar', component:IngresarComponent},
  {path:'', redirectTo:'ingresar', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
