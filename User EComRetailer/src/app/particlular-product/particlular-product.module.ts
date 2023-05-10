import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ParticlularProductPage } from './particlular-product.page';
import { MatButtonModule } from '@angular/material/button';
const routes: Routes = [
  {
    path: '',
    component: ParticlularProductPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ParticlularProductPage]
})
export class ParticlularProductPageModule {}
