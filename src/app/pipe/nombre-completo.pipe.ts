import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Pipe({
  name: 'nombreCompleto',
  standalone: true
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: Usuario, ...args: unknown[]): string {
    return value.nombre + " " + value.apellido;
  }

}
