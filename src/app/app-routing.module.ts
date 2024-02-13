import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./vista/home/home.component";
import {AvisoDePrivacidadComponent} from "./vista/aviso-de-privacidad/aviso-de-privacidad.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: {title: 'Selva Maya'}},
  {path: 'aviso-de-privacidad', component: AvisoDePrivacidadComponent,data:{title: 'Aviso de privacidad'}},
  {path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', onSameUrlNavigation:'ignore', anchorScrolling:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingC = [HomeComponent, AvisoDePrivacidadComponent]
