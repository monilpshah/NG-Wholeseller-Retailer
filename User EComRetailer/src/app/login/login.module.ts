import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
