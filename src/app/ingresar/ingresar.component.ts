import { Component } from '@angular/core';
import { Credenciales } from '../credenciales';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html'
})
export class IngresarComponent {

  credenciales: Credenciales = new Credenciales();

  constructor(private usuarioServicio: UsuarioService){}

  onSubmit(){
    this.probarCredenciales();
  }

  probarCredenciales(){
    console.log("Ingresa");
    this.usuarioServicio.ingresar(this.credenciales).subscribe(
      {
        next: (datos) => {
          console.log("Ingresa");
        },
        error: (error: any) => {console.log(error)}
      }
    );
  }
}
