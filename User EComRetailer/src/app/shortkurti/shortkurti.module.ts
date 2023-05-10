import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShortkurtiPage } from './shortkurti.page';

const routes: Routes = [
  {
    path: '',
    component: ShortkurtiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShortkurtiPage]
})
export class ShortkurtiPageModule {}
