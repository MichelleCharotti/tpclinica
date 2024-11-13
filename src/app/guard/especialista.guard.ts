import { CanActivateFn } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { inject } from '@angular/core';

export const especialistaGuard: CanActivateFn = (route, state) => {
  const usuario=inject(UsuarioService);
  
  return usuario.datos?.tipo == "especialista";
};
