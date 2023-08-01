import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { Credenciales } from './credenciales';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlBase ="http://localhost:8080/chat-app/usuarios";

  constructor(private clienteHttp: HttpClient) { }

  obtenerUsuariosLista(): Observable<Usuario[]>{
    return this.clienteHttp.get<Usuario[]>(this.urlBase);
  }

  ingresar(credenciales: Credenciales): Observable<Object>{
    return this.clienteHttp.post<Usuario>(this.urlBase, credenciales);
  }
}
