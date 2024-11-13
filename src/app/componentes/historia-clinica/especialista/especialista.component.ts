import { Component } from '@angular/core';
import { Usuario } from '../../../interfaces/usuario';
import { Subscription } from 'rxjs';
import { BaseDatosService } from '../../../servicios/base-datos.service';
import { UsuarioService } from '../../../servicios/usuario.service';
import { Estado } from '../../../interfaces/turno';
import { HistoriaClinicaComponent } from "../historia-clinica.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-especialista',
  standalone: true,
  imports: [HistoriaClinicaComponent, RouterModule, CommonModule, FormsModule],
  templateUrl: './especialista.component.html',
  styleUrl: './especialista.component.scss'
})
export class EspecialistaComponent {
  public pacientes: any[] = [];
  public pacienteSeleccionado?: Usuario;
  private subPacientes?: Subscription;
  private subTurnos?: Subscription;

  constructor(private db: BaseDatosService, private usuario: UsuarioService) {

    if(this.usuario.datos && this.usuario.datos.tipo == "especialista"){
      this.subTurnos = this.db.obtenerTurnosEspecialista(this.usuario.datos.id).subscribe(turnos=>{
        this.pacientes = [];
        turnos.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
        for(let item of turnos){
          if(item.estado == Estado.realizado)
          {
            if(!this.existePaciente(this.pacientes, item.idPaciente)){
              this.pacientes.push({id: item.idPaciente, nombre: item.nombrePaciente, dni: item.dniPaciente, fecha1: item.fecha, tipo1: item.tipo});
            }
            else{
              const indice = this.pacientes.findIndex((paciente) => paciente.id === item.idPaciente);
              if (indice !== -1) {
                if(!this.pacientes[indice].fecha2){
                  this.pacientes[indice].fecha2 = item.fecha;
                  this.pacientes[indice].tipo2 = item.tipo;
                }
                else if(!this.pacientes[indice].fecha3){
                  this.pacientes[indice].fecha3 = item.fecha;
                  this.pacientes[indice].tipo3 = item.tipo;
                }
              }
            }
          }
        }
      });
    }
  }

  get especialista(){
    return this.usuario.datos;
  }

  ngDestroy(){
    if(this.subPacientes){
      this.subPacientes.unsubscribe();
    }
    if(this.subTurnos){
      this.subTurnos.unsubscribe();
    }
  }

  seleccionarPaciente(item: Usuario){
    this.pacienteSeleccionado = item;
  }

  volver(){
    this.pacienteSeleccionado = undefined;
  }

  private existePaciente(pacientes: any[], paciente: any){
    for(let item of pacientes){
      console.log(item," | ", paciente);
      if(item.id == paciente){
        return true;
      }
    }
    return false;
  }
}
