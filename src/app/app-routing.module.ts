import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroNuevoComponent } from './pages/registro-nuevo/registro-nuevo.component';
import { HistorialEnviosComponent } from './pages/historial-envios/historial-envios.component';

const routes: Routes = [
  {
    path:'registro-nuevo' , component: RegistroNuevoComponent
  },
  {
    path: 'historial-envios', component : HistorialEnviosComponent
  },
  {
    path : '**' , pathMatch :'full' , component: RegistroNuevoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
