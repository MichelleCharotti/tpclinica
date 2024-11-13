import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { Subscription } from 'rxjs';
import { Auth } from '@angular/fire/auth';
import { BaseDatosService } from './base-datos.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public datos?: Usuario = undefined;
  private sub?: Subscription;

  constructor(private db: BaseDatosService, private auth: Auth) { }

  obtenerDatos(){
    return new Promise<Usuario>((resolve, reject) => {
    this.db.obtenerDatosUsuario(this.auth.currentUser?.uid!)
    .then(datos=>{
        if(datos.exists()){
          this.datos = datos.data() as Usuario;
          resolve(this.datos);
        }
      })
    .catch(error => 
      reject(error));
    });
  }

  // vincularDatos(id: string){
  //   if(!this.sub){
  //     this.sub = this.db.asignarDatosUsuario(id).subscribe(datos=>{
  //       this.datos = datos;
  //     })
  //   }
  // }

  cerrarSesion(){
    this.datos = undefined;
    this.auth.signOut();
    if(this.sub){
      this.sub.unsubscribe();
      this.sub = undefined;
    }
  }

  actualizarHorarios(){
    if(this.datos?.tipo == "especialista" && this.datos.horarios){
      return this.db.actualizarHorarios(this.datos.id, this.datos.horarios);
    }
    throw new Error("no es especialista");
  }
  
}
