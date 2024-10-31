import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';


export const noLoginGuard: CanActivateFn = (route, state) => {
  const usuario=inject(UsuarioService);

  return usuario.datos == undefined;



};
