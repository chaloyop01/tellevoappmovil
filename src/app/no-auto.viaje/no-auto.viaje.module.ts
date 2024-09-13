import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoAutoViajePageRoutingModule } from './no-auto.viaje-routing.module';

import { NoAutoViajePage } from './no-auto.viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoAutoViajePageRoutingModule
  ],
  declarations: [NoAutoViajePage]
})
export class NoAutoViajePageModule {}
