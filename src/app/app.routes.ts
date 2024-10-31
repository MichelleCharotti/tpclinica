import { Routes } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { noLoginGuard } from './guard/no-login.guard';
import { adminNoLoginGuard } from './guard/admin-no-login.guard';
import { adminGuard } from './guard/admin.guard';
import { logueadoGuard } from './guard/logueado.guard';

export const routes: Routes = [
    {  path: "", component:BienvenidaComponent, 
        canActivate: [noLoginGuard]
    },
    { path: "home", component:BienvenidaComponent, 
        canActivate: [noLoginGuard],
    },
    { 
        path: "registro", 
        loadComponent: () => import('./componentes/registro/registro.component').then(m => m.RegistroComponent),
        canActivate: [adminNoLoginGuard]
    },
    { 
        path: "login", 
        loadComponent: () => import('./componentes/login/login.component').then(m => m.LoginComponent),
        canActivate: [noLoginGuard],
    },
    { 
        path: "detalle-usuario", 
        loadComponent: () => import('./componentes/usuarios/detalle-usuario/detalle-usuario.component').then(m => m.DetalleUsuarioComponent),
        canActivate: [adminGuard]
    },
    { 
        path: "perfil", 
        loadComponent: () => import('./componentes/perfil/perfil.component').then(m => m.PerfilComponent),
        canActivate: [logueadoGuard]
    },
];
