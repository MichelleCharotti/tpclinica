import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Turno } from '../interfaces/turno';
import { BaseDatosService } from './base-datos.service';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  private _turnos: Turno[] = [];
  private sub?: Subscription;

  constructor(private usuario: UsuarioService, private db: BaseDatosService) { }

  public turnos(){
    return this._turnos;
  }

  ngOnInit(){}

  ngDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
    }
  }
  
}
