import { Component } from '@angular/core';
import { BaseDatosService } from '../../servicios/base-datos.service';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogComponent } from "./log/log.component";
import { DiaComponent } from "./dia/dia.component";
import { EspecialidadComponent } from "./especialidad/especialidad.component";
import { TurnosComponent } from "./turnos/turnos.component";

export enum TipoEstadistica{
  log,
  dia,
  especialidad,
  turnosSolicitados,
  turnosFinalizados
}

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule, LogComponent, DiaComponent, EspecialidadComponent, TurnosComponent],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.scss'
})
export class EstadisticasComponent {
  public estado?: TipoEstadistica
  public TipoEstadistica = TipoEstadistica;
  constructor(private db: BaseDatosService) { }

  setEspecialidad(){
    this.estado = TipoEstadistica.especialidad;
  }

  setLog(){
    this.estado = TipoEstadistica.log;
  }

  setTurnosPorDia(){
    this.estado = TipoEstadistica.dia;
  }

  setTurnosSolicitados(){
    this.estado = TipoEstadistica.turnosSolicitados;
  }

  setTurnosFinalizados(){
    this.estado = TipoEstadistica.turnosFinalizados;
  }
}




