import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoAutoViajePage } from './no-auto.viaje.page';

const routes: Routes = [
  {
    path: '',
    component: NoAutoViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoAutoViajePageRoutingModule {}
