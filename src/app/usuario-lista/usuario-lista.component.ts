import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html'
})
export class UsuarioListaComponent {

  usuarios: Usuario[];
  
  constructor(private usuarioServicio: UsuarioService){}

  ngOnInit(){
    //Cargamos los usuarios
    this.obtenerUsuarios();
  }
  
  private obtenerUsuarios(){
    //Consumir los datos del observable (suscribirnos)
    this.usuarioServicio.obtenerUsuariosLista().subscribe(
      (datos => {
        this.usuarios = datos;
      })
    );
  }
  
}
