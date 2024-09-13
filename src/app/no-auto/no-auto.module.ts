import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoAutoPageRoutingModule } from './no-auto-routing.module';

import { NoAutoPage } from './no-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoAutoPageRoutingModule
  ],
  declarations: [NoAutoPage]
})
export class NoAutoPageModule {}
