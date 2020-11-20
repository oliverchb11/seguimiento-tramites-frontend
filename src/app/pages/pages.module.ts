import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroNuevoComponent } from './registro-nuevo/registro-nuevo.component';
import { HistorialEnviosComponent } from './historial-envios/historial-envios.component';



@NgModule({
  declarations: [RegistroNuevoComponent, HistorialEnviosComponent],
  imports: [
    CommonModule
  ],
  exports:[
    RegistroNuevoComponent,
    HistorialEnviosComponent
  ]
})
export class PagesModule { }
