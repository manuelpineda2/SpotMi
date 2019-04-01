import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'start/:name', loadChildren: './start/start.module#StartPageModule' },
  { path: 'restaurants/:location', loadChildren: './restaurants/restaurants.module#RestaurantsPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  { path: 'popover', loadChildren: './popover/popover.module#PopoverPageModule' },
  { path: 'showmore', loadChildren: './showmore/showmore.module#ShowmorePageModule' },
  { path: 'hotels/:location', loadChildren: './hotels/hotels.module#HotelsPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
