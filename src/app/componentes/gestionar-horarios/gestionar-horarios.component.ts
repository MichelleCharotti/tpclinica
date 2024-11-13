import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';
import { Dia, Horario } from '../../interfaces/usuario';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-gestionar-horarios',
  standalone: true,
  imports: [ RouterModule, CommonModule, FormsModule, LoadingComponent],
  templateUrl: './gestionar-horarios.component.html',
  styleUrl: './gestionar-horarios.component.scss'
})
export class GestionarHorariosComponent {
  public horario?: Horario;
  public actualizando: boolean = false;
  public mensaje: string = "";

  constructor(private usuario: UsuarioService) { }

  get especialidades():Horario[] | undefined{
    return this.usuario.datos ? this.usuario.datos?.horarios : [];
  }

  seleccionarHorario(horario: Horario) {
    this.horario = horario;
    this.horario.dias[0]
  }
  cambiarTiempo(tiempo: number){
    if(this.horario)
      this.horario.tiempo = tiempo;
  }

  cambiarEstado(index: number){
    if(this.horario?.dias)
      this.horario.dias[index].estado = !this.horario.dias[index].estado;
    console.log(this.horario);
    console.log(this.usuario.datos?.horarios);
  }

  validarInicio(dia: Dia) {
    const min = 8;
    let valor = dia.inicio;

    if(dia.inicio < min){
      valor = min;
    }
    if(dia.inicio >= dia.fin){
      valor = dia.fin - 1;
    }
    dia.inicio = valor;
    console.log(this.horario);
  }

  validarFin(dia: Dia) {
    const max = dia.nombre == 'sabado' ? 14 : 19;
    let valor = dia.fin;
    if(dia.fin > max){
      valor = max;
    }
    if(dia.fin <= dia.inicio){
      valor = dia.inicio + 1;
    }
    dia.fin = valor;
    console.log(this.horario);
  }

  actualizarHorarios(){
    this.actualizando = true;
    this.usuario.actualizarHorarios()
    .then(()=>{
      this.actualizando = false;
      this.mensaje = "Horarios actualizados exitosamente";
    })
    .catch(error => {
      console.log(error);
      this.mensaje = "Error en la base de datos. Intentelo mas tarde";
    });
  }
}
