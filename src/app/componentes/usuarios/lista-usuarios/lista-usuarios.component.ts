import { Component, EventEmitter, Output } from '@angular/core';
import { Usuario } from '../../../interfaces/usuario';
import { Subscription } from 'rxjs';
import { BaseDatosService } from '../../../servicios/base-datos.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [ RouterModule, CommonModule],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.scss'
})
export class ListaUsuariosComponent {
  @Output() usuarioSeleccionado = new EventEmitter<Usuario>();
  @Output() usuariosLista = new EventEmitter<Usuario[]>();

  public usuarios: Array<Usuario> = [];
  private subToUsuarios?: Subscription;

  constructor(private db: BaseDatosService) {}

  ngOnInit() {
    this.subToUsuarios = this.db.obtenerUsuarios().subscribe(datos=>{
      this.usuarios = datos;
      this.actualizarLista();
    });
  }

  ngOnDestroy() {
    if (this.subToUsuarios)
      this.subToUsuarios.unsubscribe();
  }

  seleccionarUsuario(usuario: Usuario) {
    this.usuarioSeleccionado.emit(usuario);
  }

  actualizarLista(){
    this.usuariosLista.emit(this.usuarios);
  }
  
}
