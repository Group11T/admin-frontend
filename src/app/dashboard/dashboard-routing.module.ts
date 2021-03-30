import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path : '' , component : DashboardComponent , children : [
    {path : 'home' , component : HomeComponent , pathMatch : 'full' },
     {path : 'users' , component : UsersComponent , pathMatch : 'full' },
     {path : 'orders' , component : OrdersComponent, pathMatch :'full' },
     {path : 'user' , component : UserDetailsComponent, pathMatch :'full' },
    // {path : 'users/riders' , component : RidersComponent , pathMatch : 'full' },

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
