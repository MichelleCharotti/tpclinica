import { Component } from '@angular/core';
import { Usuario } from '../../../interfaces/usuario';
import { Observable } from 'rxjs';
import { BaseDatosService } from '../../../servicios/base-datos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { SolicitarTurnoComponent } from "../solicitar-turno.component";
import { DniFormatoPipe } from '../../../pipe/dni-formato.pipe';
import { NombreCompletoPipe } from '../../../pipe/nombre-completo.pipe';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, 
    SolicitarTurnoComponent,DniFormatoPipe,NombreCompletoPipe],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  public pacienteSeleccionado?: Usuario;
  public pacientes: Observable<Usuario[]>;

  constructor(private db: BaseDatosService){
    this.pacientes = db.obtenerPacientes();
  }

  seleccionarPaciente(item: Usuario){
    this.pacienteSeleccionado = item;
  }

  volver(){
    this.pacienteSeleccionado = undefined;
  }

}
