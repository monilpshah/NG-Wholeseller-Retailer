import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnarkalikurtiPage } from './anarkalikurti.page';

const routes: Routes = [
  {
    path: '',
    component: AnarkalikurtiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnarkalikurtiPage]
})
export class AnarkalikurtiPageModule {}
