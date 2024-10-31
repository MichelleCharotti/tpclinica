import { CanActivateFn, Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const usuario=inject(UsuarioService);
  const router=inject(Router);

  if(usuario == undefined){
    return router.parseUrl("/home");
  }
  if(usuario.datos?.tipo == "admin"){
    return true;
  }
  return router.parseUrl("/perfil");


};
