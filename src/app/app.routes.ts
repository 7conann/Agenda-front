import { Routes } from '@angular/router';
import { Login } from './loginModule/components/login/login';
import { Registrar } from './loginModule/components/registrar/registrar';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'registrar', component: Registrar },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // redireciona raiz para login
];
