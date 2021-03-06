import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { PolarPage } from './polar.page';
import { Chart } from 'chart.js';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PolarPage
      }
    ])
  ],
  declarations: [PolarPage]
})
export class PolarPageModule {}
