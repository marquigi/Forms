import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormControlComponent } from './components/form-control.component/form-control.component';
import { FormGroupComponent } from './components/form-group.component/form-group.component';


const routes: Routes = [
  // Definizione delle rotte dell’applicazione:
  // la rotta '' (root) mostra FormControlComponent,
  // mentre 'form-group' mostra FormGroupComponent
  {
    path: '',
    component: FormControlComponent
  },
  {
    path: 'form-group',
    component: FormGroupComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
