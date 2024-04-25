import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/nav/nav.component')
      .then(c => c.NavComponent),
    children:[
      {
        path:'home',
        title: 'Home',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
      },
      {
        path:'ver-bombos',
        title: 'Bombos',
        loadComponent: () => import('./pages/ver-bombos/ver-bombos.component').then(c=>c.VerBombosComponent)
      },
      {
        path:'sorteo',
        title:'Empezar sorteo',
        loadComponent: () => import('./pages/sorteo/sorteo.component').then(c => c.SorteoComponent)
      },
      {
        path:'historial',
        title:'Historial de sorteos',
        loadComponent: () => import('./pages/historial-sorteos/historial-sorteos.component').then(c => c.HistorialSorteosComponent)
      },
      {
        path:'ver-equipos',
        title:'Ver equipos',
        loadComponent: () => import('./pages/ver-equipos/ver-equipos.component').then(c => c.VerEquiposComponent)
      },
      {
        path:'partidos',
        title:'Partidos',
        loadComponent: () => import('./pages/partidos/partidos.component').then(c => c.PartidosComponent)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  }
];
