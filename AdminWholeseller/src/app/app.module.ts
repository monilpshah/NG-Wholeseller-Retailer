import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';

import { MatInputModule,
         MatIconModule,
         MatTableModule,
        MatSelectModule,
        MatPaginatorModule,
        MatCheckboxModule,
         MatToolbarModule,
          MatButtonModule,
           MatSidenavModule,
            MatListModule,
            MatNativeDateModule,
            MatDatepickerModule} from '@angular/material';

import { MatFormFieldModule } from '@angular/material/form-field';
import { SignValidationsComponent } from './sign-validations/sign-validations.component';
import { SignupComponent } from './signup/signup.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { UsertableComponent } from './usertable/usertable.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MenubarComponent } from './menubar/menubar.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

import { EditcategoryComponent } from './category/editcategory/editcategory.component';
import { AddproducComponent } from './product/addproduc/addproduc.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';
import { WholsallerComponent } from './wholsaller/wholsaller.component';
import { RetailerComponent } from './retailer/retailer.component';
import { TempproductComponent } from './tempproduct/tempproduct.component';
import { BillComponent } from './bill/bill.component';
import { BilldetailsComponent } from './bill/billdetails/billdetails.component';
import { WholesallercomissionComponent } from './wholesallercomission/wholesallercomission.component';
import { WholesalerSideProductComponent } from './wholesaler-side-product/wholesaler-side-product.component';
import { WholsaleraddproductComponent } from './wholsaleraddproduct/wholsaleraddproduct.component';
import { WholesalerMenuComponent } from './wholesaler-menu/wholesaler-menu.component';
import { WholesalerEditProductComponent } from './wholesaler-side-product/wholesaler-edit-product/wholesaler-edit-product.component';
import { ProductpagedesignComponent } from './productpagedesign/productpagedesign.component';
import { WholsallingprolistComponent } from './wholsallingprolist/wholsallingprolist.component';


@NgModule({
  declarations: [
    AppComponent,
    SignValidationsComponent,
    SignupComponent,
    EditprofileComponent,
    UsertableComponent,
    MenubarComponent,
    CategoryComponent,
    LoginComponent,
    ProductComponent,
    EditcategoryComponent,
    AddproducComponent,
    EditproductComponent,
    WholsallerComponent,
    RetailerComponent,
    TempproductComponent,
    BillComponent,
    BilldetailsComponent,
    WholesallercomissionComponent,
    WholesalerSideProductComponent,
    WholsaleraddproductComponent,
    WholesalerMenuComponent,
    WholesalerEditProductComponent,
    ProductpagedesignComponent,
    WholsallingprolistComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    routing,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
