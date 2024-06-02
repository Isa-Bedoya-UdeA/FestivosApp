import { Routes } from '@angular/router';
import { InicioComponent } from './features/components/inicio/inicio.component';
import { FestivoComponent } from './features/components/festivo/festivo.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'festivos', component: FestivoComponent },
];
