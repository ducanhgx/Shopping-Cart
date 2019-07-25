import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './lab_5/cart/cart.component';
import { Bai2Component } from './lab_5/bai2/bai2.component';
const routes: Routes = [
	{ path: '', component: Bai2Component },
	{ path: 'products', component: Bai2Component },
	{ path: 'cart', component: CartComponent },
	// { path: 'cart/:id', component: CartComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
