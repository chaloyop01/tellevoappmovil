import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoViajePageRoutingModule } from './auto.viaje-routing.module';

import { AutoViajePage } from './auto.viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoViajePageRoutingModule
  ],
  declarations: [AutoViajePage]
})
export class AutoViajePageModule {}
