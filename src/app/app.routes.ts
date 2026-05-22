import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () =>
      import('./pages/inicio/inicio.page').then(m => m.InicioPage)
  },
  {
    path: 'registro-empleado',
    loadComponent: () =>
      import('./pages/registro-empleado/registro-empleado.page')
        .then(m => m.RegistroEmpleadoPage)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];
