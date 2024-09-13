import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoViajePage } from './auto.viaje.page';

const routes: Routes = [
  {
    path: '',
    component: AutoViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoViajePageRoutingModule {}
