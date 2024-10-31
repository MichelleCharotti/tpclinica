import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterModule,RouterLinkActive,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private usuario: UsuarioService, private router: Router) { }

  get tipoUsuario(){
    return this.usuario.datos?.tipo;
  }

  cerrarSesion(){
    this.usuario.cerrarSesion();
    this.router.navigate(["home"]);
  }

}
