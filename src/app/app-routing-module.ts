import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormControlComponent } from './components/form-control.component/form-control.component';
import { FormGroupComponent } from './components/form-group.component/form-group.component';
import { ValidatoriComponent } from './components/validatori.component/validatori.component';
import { GestioneErroriComponent } from './components/gestione-errori.component/gestione-errori.component';
import { ValidatoriCustomControlComponent } from './components/validatori-custom-control.component/validatori-custom-control.component';
import { ValidatoriCustomGroupComponent } from './components/validatori-custom-group.component/validatori-custom-group.component';

const routes: Routes = [
  { path: '', component: FormControlComponent },
  { path: 'form-group', component: FormGroupComponent },
  {
    path: 'validatori',
    component: ValidatoriComponent,
    children: [
      { path: '', component: GestioneErroriComponent },
      { path: 'custom-control', component: ValidatoriCustomControlComponent },
      { path: 'custom-group', component: ValidatoriCustomGroupComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

