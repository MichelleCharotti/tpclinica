import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { ListaUsuariosComponent } from "./lista-usuarios/lista-usuarios.component";

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule, RouterLinkActive, CommonModule, ListaUsuariosComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {
  public usuario?: Usuario;
  public usuariosLita: Usuario[] = [];

  constructor(private router: Router) { }
  
  onSeleccion(usuario: Usuario) {
    this.usuario = usuario;
  }
  
  onListaNueva(lista: Usuario[]) {
    this.usuariosLita = lista;
  }

  enviarARegistro(){
    this.router.navigate(["/registro"]);
  }

}
