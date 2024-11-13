import { ChangeDetectorRef, Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { BaseDatosService } from '../../servicios/base-datos.service';
import { confirmarClave } from '../../validators/validators';
import { EspecialidadSeleccion } from '../../interfaces/especialidad-seleccion';
import { Usuario } from '../../interfaces/usuario';
import { CommonModule } from '@angular/common';
import { ListaEspecialidadesComponent } from "./lista-especialidades/lista-especialidades.component";
import { NgxCaptchaModule } from 'ngx-captcha';
import { LoadingComponent } from "../loading/loading.component";
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ RouterLink, RouterModule, CommonModule, FormsModule, ReactiveFormsModule,
    ListaEspecialidadesComponent, NgxCaptchaModule, LoadingComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  public formularioRegistro: FormGroup;
  public imagen2Control: AbstractControl | null;
  public obraSocialControl: AbstractControl | null;

  public tipo: string = "";
  public especialidades: EspecialidadSeleccion[] = [];
  public posiblesEspecialidades: Array<any> = [];
  public generando: boolean = false;
  public mensaje: string = "";
  public imagen1: any;
  public imagen2: any;

  constructor(private db: BaseDatosService, private usuario: UsuarioService,  private router: Router,
    private auth: Auth, private cdr: ChangeDetectorRef) {
  this.formularioRegistro = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    nombre: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z\\s]+$")]),
    apellido: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z\\s]+$")]),
    obraSocial: new FormControl("", [Validators.required]),
    edad: new FormControl("", [Validators.required, Validators.pattern("^[0-9]+$"), Validators.min(1), Validators.max(120)]),
    dni: new FormControl("", [Validators.required, Validators.pattern("^[0-9]+$"), Validators.maxLength(8), Validators.minLength(7)]),
    password: new FormControl("", [Validators.minLength(16), Validators.required]),
    repetirPassword: new FormControl("", [Validators.minLength(16), Validators.required]),
    imagen1: new FormControl(null, [Validators.required]),
    imagen2: new FormControl(null, [Validators.required]),
    recaptcha: new FormControl (null, [Validators.required])
    }, [confirmarClave()]);

   this.imagen2Control = this.formularioRegistro.get('imagen2');
   this.obraSocialControl = this.formularioRegistro.get('obraSocial');
}

get esAdmin(){
  return this.usuario.datos?.tipo == "admin";
}

setPaciente() {
  this.tipo = 'paciente';

  this.imagen2Control?.reset();
  this.obraSocialControl?.reset();
  this.imagen2Control?.setValidators([Validators.required]);
  this.obraSocialControl?.setValidators([Validators.required]);

  this.formularioRegistro.updateValueAndValidity();
  this.cdr.detectChanges();
}

setEspecialista() {
  this.tipo = 'especialista';

  this.obraSocialControl?.clearValidators();
  this.imagen2Control?.clearValidators();

  this.obraSocialControl?.setErrors(null);
  this.imagen2Control?.setErrors(null);

  this.especialidades = [];
  this.cdr.detectChanges();
}

setAdmin() {
  this.tipo = 'admin';

  this.obraSocialControl?.clearValidators();
  this.imagen2Control?.clearValidators();

  this.obraSocialControl?.setErrors(null);
  this.imagen2Control?.setErrors(null);

  this.formularioRegistro.updateValueAndValidity();
  this.cdr.detectChanges();
}

onSeleccion(especialidades: Array<EspecialidadSeleccion>) {
  this.especialidades = especialidades;
  if(this.especialidades.length > 0) {
    this.formularioRegistro.updateValueAndValidity();
  }
  else{
    this.formularioRegistro.setErrors({faltaEspecialidad: true});
  }
}

async generarUsuario(){
  this.generando = true;
  this.limpiarEspacios();
  let datos = this.formularioRegistro.value;

  if(await this.db.usuarioExiste(datos.email))
  {
    this.formularioRegistro.get('email')?.setErrors({usuarioExiste: true});
    this.generando = false;
  }
  else{
    createUserWithEmailAndPassword(this.auth, datos.email, datos.password)
    .then((datosUsuario) => {
      datos.id = datosUsuario.user.uid;
      this.guardarEnBaseDatos(datos);
      //return sendEmailVerification(datosUsuario.user);
      return true;
    })
    .then(() => {
      this.generando = false;
      this.mensaje = "Se genero el usuario exitosamente. Se envio mail de verificacion de cuenta";
    })
    .catch((error) => {
      this.generando = false;
      this.mensaje = "Error, Base de datos fuera de servicio, vuelva a intentarlo en unos minutos";
      console.error('Registro fallado:', error);
    });
  }
}

private guardarEnBaseDatos(datos: Usuario){
  let usuario: Usuario = {
    id: datos.id,
    nombre: datos.nombre,
    apellido: datos.apellido,
    email: datos.email,
    dni: datos.dni,
    edad: datos.edad,
    tipo: this.tipo,
    imagen1: this.imagen1
  };

  switch(usuario.tipo){
    case "paciente":
      usuario.obraSocial = datos.obraSocial;
      usuario.imagen2 = this.imagen2;
      break;

    case "especialista":
      usuario.especialidades = this.especialidades.map(datos => datos.especialidad.nombre);
      usuario.horarios = [];
      for(let item of usuario.especialidades){
        usuario.horarios.push({
          especialidad: item,
          tiempo: 30,
          dias: [{nombre: "lunes", estado: true, inicio: 8, fin: 19},
            {nombre: "martes", estado: true, inicio: 8, fin: 19},
            {nombre: "miercoles", estado: true, inicio: 8, fin: 19},
            {nombre: "jueves", estado: true, inicio: 8, fin: 19},
            {nombre: "viernes", estado: true, inicio: 8, fin: 19},
            {nombre: "sabado", estado: true, inicio: 8, fin: 14},
          ]
        });
      }
      usuario.habilitado = false;
      break;
  }
  this.db.agregarUsuario(usuario);
}

private limpiarEspacios(){
  this.formularioRegistro.get('email')?.setValue(this.formularioRegistro.get('email')?.value.trim());
  this.formularioRegistro.get('password')?.setValue(this.formularioRegistro.get('password')?.value.trim());
  this.formularioRegistro.get('repetirPassword')?.setValue(this.formularioRegistro.get('repetirPassword')?.value.trim());
}

formatearNumeros(control: any){
  const value = control.value || '';
  control.setValue(value.replace(/\D/g, ''));
}

formatearLetras(control: any){
  const value = control.value || '';
  control.setValue(value.replace(/[^A-Za-z\s]/g, ''));
}

formatearInputLetras(input: HTMLInputElement) {
  const value = input.value || '';
  input.value = value.replace(/[^A-Za-z\s]/g, '');
}

eliminarEspacios(control: any){
  const value = control.value || '';
  control.setValue(value.replace(/\s/g, ''));
}

agregarEspecialidad(valor: string){
  this.db.agregarEspecialidad(valor);
}

finalizarRegistro(){
  if(this.usuario.datos?.tipo == "admin"){
    this.router.navigate(["detalle-usuario"]);
  }
  else{
    this.router.navigate(["/login"]);
  }
}

cargarImagen1($event: any){
  let extension = this.formularioRegistro.get("imagen1")?.value.split(".");
  extension = extension[extension.length - 1];
  if(extension!= "png" && extension!= "jpeg" && extension!= "jpg" && extension!= "gif"){
    this.formularioRegistro.get("imagen1")?.setValue("");
  }
  else{
    this.imagen1 = $event.target.files[0];
  }
}
cargarImagen2($event: any){
  let extension = this.formularioRegistro.get("imagen2")?.value.split(".");
  extension = extension[extension.length - 1];
  if(extension!= "png" && extension!= "jpeg" && extension!= "jpg" && extension!= "gif"){
    this.formularioRegistro.get("imagen2")?.setValue("");
  }
  else{
    this.imagen2 = $event.target.files[0];
  }
}

}
