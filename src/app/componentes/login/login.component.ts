import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';
import { Auth, sendEmailVerification, signInWithEmailAndPassword } from '@angular/fire/auth';
import { BaseDatosService } from '../../servicios/base-datos.service';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "../loading/loading.component";
import { MostrarPasswordDirective } from '../../directiva/mostrar-password.directive';
import { ClickAfueraDirective } from '../../directiva/click-afuera.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [  CommonModule, FormsModule, ReactiveFormsModule, LoadingComponent,
    MostrarPasswordDirective,ClickAfueraDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public formularioLogin: FormGroup;
  public validando: boolean = false;
  public error: string = "";

 

  constructor(private router: Router, private usuario: UsuarioService, private auth: Auth,private db: BaseDatosService) {
    this.formularioLogin = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.minLength(16), Validators.required])
    })
  }

  logear(){
    this.limpiarEspacios();
    this.error = "";
    this.validando = true;
    const usuario = this.formularioLogin.value;

    signInWithEmailAndPassword(this.auth, usuario.email, usuario.password)
    .then((datosUsuario) =>{
      if(datosUsuario.user)
      {
        if(datosUsuario.user.emailVerified){
          this.usuario.obtenerDatos().then(datos=>{
            if(datos.tipo == "especialista" && !datos.habilitado){
              this.validando=false;
              this.error = "Cuenta NO Verificado Por Administracion. Contacte a la Clinica";
              this.usuario.cerrarSesion();
            }
            else{
              this.db.generarLog(this.usuario.datos);
              this.router.navigate(["/perfil"]);
            }
          })  
        }
        else{
          this.validando=false;
          this.error = "Debe verificar su email antes de iniciar sesion";
          sendEmailVerification(datosUsuario.user);
          this.auth.signOut();
        }
      }
      else
      {
        this.validando=false;
        this.error = "Credenciales Invalidas";
      }
    })
    .catch((errors)=>{
      this.validando=false;
      this.error = "Credenciales Invalidas";
    })
}
  
private limpiarEspacios(){
  this.formularioLogin.get('email')?.setValue(this.formularioLogin.get('email')?.value.trim());
  this.formularioLogin.get('password')?.setValue(this.formularioLogin.get('password')?.value.trim());
}

registro(){
  this.router.navigate(["registro"]);
}


completarAdmin(){
  this.formularioLogin.get('email')?.setValue("michellecharotti@gmail.com");
  this.formularioLogin.get('password')?.setValue("rootrootrootroot");
}
completarEspecialista(){
  this.formularioLogin.get('email')?.setValue("michel_1@hotmail.com.ar");
  this.formularioLogin.get('password')?.setValue("medicomedicomedico");
}

completarEspecialista2(){
  this.formularioLogin.get('email')?.setValue("hivawim430@aqqor.com");
  this.formularioLogin.get('password')?.setValue("hivawim430@aqqor.com");
}

completarPaciente(){
  this.formularioLogin.get('email')?.setValue("informmc01@gmail.com");
  this.formularioLogin.get('password')?.setValue("pacientepaciente");
}
completarPaciente2(){
  this.formularioLogin.get('email')?.setValue("bodas76110@opposir.com");
  this.formularioLogin.get('password')?.setValue("bodas76110@opposir.com");
}

completarPaciente3(){
  this.formularioLogin.get('email')?.setValue("deyicok435@gianes.com");
  this.formularioLogin.get('password')?.setValue("deyicok435@gianes.com");
}



}
