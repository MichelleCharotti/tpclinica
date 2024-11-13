import { Component } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DetalleUsuarioComponent } from "../usuarios/detalle-usuario/detalle-usuario.component";

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [ RouterModule, CommonModule, FormsModule, DetalleUsuarioComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {
  constructor(private usuario: UsuarioService, private router: Router) { }

  get datos(){
    return this.usuario.datos;
  }

  enviarAGestionarHorarios(){
    this.router.navigate(["gestionar-horarios"]);
  }

  enviarAHistoriaClinica(){
    this.router.navigate(["historia-clinica"]);
  }
}
