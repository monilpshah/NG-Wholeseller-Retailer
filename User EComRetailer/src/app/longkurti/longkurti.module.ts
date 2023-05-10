import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LongkurtiPage } from './longkurti.page';

const routes: Routes = [
  {
    path: '',
    component: LongkurtiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LongkurtiPage]
})
export class LongkurtiPageModule {}
