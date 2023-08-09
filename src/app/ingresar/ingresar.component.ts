import { Component } from '@angular/core';
import { Credenciales } from '../credenciales';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html'
})
export class IngresarComponent {

  public msg:string = "";

  credenciales: Credenciales = new Credenciales();

  constructor(private usuarioServicio: UsuarioService, private enrutador: Router){}

  onSubmit(){
    this.probarCredenciales();
  }

  probarCredenciales(){
    this.usuarioServicio.ingresar(this.credenciales).subscribe(
      {
        next: (datos) => {
          console.log("retorna: "+JSON.stringify(datos));
          var usuRetornado = JSON.stringify(datos);
          if(usuRetornado.includes(this.credenciales.email)){
            console.log("Ingresa: "+this.credenciales.email);
            this.enrutador.navigate(['chatear']);
          }else{
            console.log("NO INGRESA:::");
            this.msg = "Usuario y Password Incorrectos !!!";
          }
          
        },
        error: (error: any) => {
          console.log(error)
        }
      }
    );
  }
}
