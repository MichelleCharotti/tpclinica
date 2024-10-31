import { CanActivateFn } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { inject } from '@angular/core';

export const adminNoLoginGuard: CanActivateFn = (route, state) => {

  const usuario=inject(UsuarioService);

  console.log(usuario.datos,"|",usuario.datos?.tipo);
  return usuario.datos == undefined || usuario.datos?.tipo == "admin";

};
