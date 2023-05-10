import { Routes,RouterModule } from '@angular/router';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { SignupComponent } from './signup/signup.component';
import { UsertableComponent } from './usertable/usertable.component';
import { CategoryComponent } from './category/category.component';
import { MenubarComponent } from './menubar/menubar.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { EditcategoryComponent } from './category/editcategory/editcategory.component';
import { AddproducComponent } from './product/addproduc/addproduc.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';
import { WholsallerComponent } from './wholsaller/wholsaller.component';
import { RetailerComponent } from './retailer/retailer.component';
import { TempproductComponent } from './tempproduct/tempproduct.component';
import { BillComponent } from './bill/bill.component';
import { billdetails } from './classes/bill_deatils';
import { BilldetailsComponent } from './bill/billdetails/billdetails.component';
import { WholesallercomissionComponent } from './wholesallercomission/wholesallercomission.component';
import { WholesalerSideProductComponent } from './wholesaler-side-product/wholesaler-side-product.component';
import { WholesalerMenuComponent } from './wholesaler-menu/wholesaler-menu.component';
import { WholsaleraddproductComponent } from './wholsaleraddproduct/wholsaleraddproduct.component';
import { WholesalerEditProductComponent } from './wholesaler-side-product/wholesaler-edit-product/wholesaler-edit-product.component';
import { WholsallingprolistComponent } from './wholsallingprolist/wholsallingprolist.component';

const arr:Routes=[
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'menu',component:MenubarComponent,children:[
  {path:'editprofile/:email_id',component:EditprofileComponent},
  {path:'signup',component:SignupComponent},
  {path:'usertable',component:UsertableComponent},
  {path:'category',component:CategoryComponent},
  {path:'editcategory/:cat_id',component:EditcategoryComponent},
  {path:'product',component:ProductComponent},
  {path:'addproduct',component:AddproducComponent},
  {path:'editproduct/:product_id',component:EditproductComponent},
  {path:'wholsaller',component:WholsallerComponent},
  {path:'retailer',component:RetailerComponent},
  {path:'tempproduct',component:TempproductComponent},
  {path:'bill',component:BillComponent},
  {path:'billdetails/:bill_no',component:BilldetailsComponent},
  {path:'wholecomissionbill',component:WholesallercomissionComponent},
  ]},

  {path:'wholesalerMenu',component:WholesalerMenuComponent,children:[
    {path:'wholesalerSideProduct',component:WholesalerSideProductComponent},
    {path:'wholesalerAddProduct',component:WholsaleraddproductComponent},
    {path:'wholesalerEditProduct/:product_id',component:WholesalerEditProductComponent},
    {path:'wholsallingpro',component:WholsallingprolistComponent}
  ]}

];

export const routing=RouterModule.forRoot(arr);
