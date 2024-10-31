import { Component, EventEmitter, Output } from '@angular/core';
import { Especialidad } from '../../../interfaces/especialidad';
import { EspecialidadSeleccion } from '../../../interfaces/especialidad-seleccion';
import { BaseDatosService } from '../../../servicios/base-datos.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-especialidades',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterModule,RouterLinkActive,CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './lista-especialidades.component.html',
  styleUrl: './lista-especialidades.component.scss'
})
export class ListaEspecialidadesComponent {
  @Output() onEspecialidadesSeleccionados = new EventEmitter<Array<EspecialidadSeleccion>>();
  @Output() onSeleccionarUnEspecialidad = new EventEmitter<Especialidad>();

  public especialidades: Array<EspecialidadSeleccion> = [];
  public especialidadesSeleccionadas: Array<EspecialidadSeleccion> = [];
  private subcripcion?: Subscription;

  constructor(private db: BaseDatosService){}

  ngOnInit(){
    this.subcripcion = this.db.obtenerEspecialidades().subscribe(datos=>{
      this.especialidades = [];
      for( let especialidad of datos ){
        this.especialidades.push({seleccionado: false, especialidad: especialidad});
      }
    });
  }

  ngOnDestroy(){
    if(this.subcripcion)
      this.subcripcion.unsubscribe();
  }

  actulizarSeleccion() {
    this.especialidadesSeleccionadas = this.especialidades.filter(item => item.seleccionado);
    this.emitirListadoSeleccionado();
  }

  private emitirListadoSeleccionado(){
    this.onEspecialidadesSeleccionados.emit(this.especialidadesSeleccionadas);
  }

  seleccionar(especialidad: EspecialidadSeleccion){
    especialidad.seleccionado = !especialidad.seleccionado;
    this.especialidadesSeleccionadas = this.especialidades.filter(item => item.seleccionado);
    this.emitirListadoSeleccionado();
  }
}
