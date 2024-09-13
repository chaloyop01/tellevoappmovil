import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoAutoPage } from './no-auto.page';

const routes: Routes = [
  {
    path: '',
    component: NoAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoAutoPageRoutingModule {}
