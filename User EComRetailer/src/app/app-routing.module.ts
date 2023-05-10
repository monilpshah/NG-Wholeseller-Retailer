import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    // loadChildren: 
    loadChildren: () => import('./home/home.module').then(x => x.HomePageModule)
  },
  // {
  //   path: 'list',
    { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListPageModule) },
    // loadChildren: './list/list.module#ListPageModule'
  // },
  { path: 'login', loadChildren: () => import('./login/login.module').then(x => x.LoginPageModule) },
  { path: 'product', loadChildren: () => import('./product/product.module').then(x => x.ProductPageModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(x => x.SignupPageModule) },
  { path: 'homeproduct', loadChildren: () => import('./homeproduct/homeproduct.module').then(x => x.HomeproductPageModule) },
  { path: 'detailproduct',loadChildren: () => import('./detailproduct/detailproduct.module').then(x => x.DetailproductPageModule) },
  { path: 'particlular-product/:product_id', loadChildren: () => import('./particlular-product/particlular-product.module').then(x => x.ParticlularProductPageModule) },
  { path: 'size-page/:product_size', loadChildren: () => import('./size-page/size-page.module').then(x => x.SizePagePageModule) },
  { path: 'color-page/:product_color', loadChildren: () => import('./color-page/color-page.module').then(x => x.ColorPagePageModule) },
  { path: 'price-page/:product_price', loadChildren: () => import('./price-page/price-page.module').then(x => x.PricePagePageModule) },
  { path: 'discountproduct', loadChildren: () => import('./discountproduct/discountproduct.module').then(x => x.DiscountproductPageModule) },
  { path: 'saller-location', loadChildren: () => import('./saller-location/saller-location.module').then(x => x.SallerLocationPageModule) },
  { path: 'shortkurti', loadChildren: () => import('./shortkurti/shortkurti.module').then(x => x.ShortkurtiPageModule) },
  { path: 'longkurti', loadChildren: () => import('./longkurti/longkurti.module').then(x => x.LongkurtiPageModule) },
  { path: 'anarkalikurti', loadChildren: () => import('./anarkalikurti/anarkalikurti.module').then(x => x.AnarkalikurtiPageModule) },
  { path: 'cartpage', loadChildren: () => import('./cartpage/cartpage.module').then(x => x.CartpagePageModule) },
  { path: 'serchpage', loadChildren: () => import('./serchpage/serchpage.module').then(x => x.SerchpagePageModule) },
  { path: 'pastorder', loadChildren: () => import('./pastorder/pastorder.module').then(x => x.PastorderPageModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
