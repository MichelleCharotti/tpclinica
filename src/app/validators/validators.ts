import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function confirmarClave(): ValidatorFn
{
  return (formGroup: AbstractControl): ValidationErrors | null =>
  {
    const password = formGroup.get('password');
    const repetirPassword = formGroup.get('repetirPassword');
    const error = { noCoincide: 'La Contraseña No Coincide'};

    if(password?.value !== repetirPassword?.value)
    {
      formGroup.get('repetirPassword')?.setErrors(error);
      return error;
    }
    else
    {
      formGroup.get('repetirPassword')?.setErrors(null);
      return null;
    }
  }
}

export function validarImagen(): ValidatorFn {
  return (formControl: AbstractControl): ValidationErrors | null => {
    const file = formControl.value;
    let extension = file.split(".");
    extension = extension[extension.length-1];
    if ( extension != "png" && extension != "jpeg" && extension != "jpg" && extension != "jfif" && extension != "pjpeg") {
      return { invalidExtension: true };
    }

    return null;
  };
}