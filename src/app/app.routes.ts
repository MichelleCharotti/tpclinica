import { Routes } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { noLoginGuard } from './guard/no-login.guard';
import { adminNoLoginGuard } from './guard/admin-no-login.guard';
import { adminGuard } from './guard/admin.guard';
import { logueadoGuard } from './guard/logueado.guard';
import { especialistaGuard } from './guard/especialista.guard';
import { EspecialistaComponent } from './componentes/historia-clinica/especialista/especialista.component';

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
        loadComponent: () => import('./componentes/usuarios/usuarios.component').then(m => m.UsuariosComponent),
        canActivate: [adminGuard]
    },
    // { 
    //     path: "detalle-usuario", 
    //     loadComponent: () => import('./componentes/usuarios/detalle-usuario/detalle-usuario.component').then(m => m.DetalleUsuarioComponent),
    //     // canActivate: [adminGuard]
    // },
    // { 
    //     path: "lista-usuarios", 
    //     loadComponent: () => import('./componentes/usuarios/lista-usuarios/lista-usuarios.component').then(m => m.ListaUsuariosComponent),
    // },
    { 
        path: "perfil", 
        loadComponent: () => import('./componentes/perfil/perfil.component').then(m => m.PerfilComponent),
        canActivate: [logueadoGuard]
    },
    { 
        path: "solicitar-turno", 
        loadComponent: () => import('./componentes/solicitar-turno/solicitar-turno.component').then(m => m.SolicitarTurnoComponent)
    },
    { 
        path: "solicitar-turno/admin", 
        loadComponent: () => import('./componentes/solicitar-turno/admin/admin.component').then(m => m.AdminComponent)
    },
    { 
        path: "gestionar-horarios", 
        loadComponent: () => import('./componentes/gestionar-horarios/gestionar-horarios.component').then(m => m.GestionarHorariosComponent),
        canActivate: [especialistaGuard],
    },
    { 
        path: "historial-turnos", 
        loadComponent: () => import('./componentes/historial-turnos/historial-turnos.component').then(m => m.HistorialTurnosComponent)
    },
    { 
        path: "historia-clinica", 
        loadComponent: () => import('./componentes/historia-clinica/historia-clinica.component').then(m => m.HistoriaClinicaComponent)
    },
    { 
        path: "pacientes",
        // component:EspecialistaComponent, 
        loadComponent: () => import('./componentes/historia-clinica/especialista/especialista.component').then(m => m.EspecialistaComponent)
    },
    { 
        path: "estadisticas",
        loadComponent: () => import('./componentes/estadisticas/estadisticas.component').then(m => m.EstadisticasComponent)
    },
];
