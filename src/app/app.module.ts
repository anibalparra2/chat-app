import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { IngresarComponent } from './ingresar/ingresar.component';
import { FormsModule } from '@angular/forms';
import { ChatearComponent } from './chatear/chatear.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioListaComponent,
    IngresarComponent,
    ChatearComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
