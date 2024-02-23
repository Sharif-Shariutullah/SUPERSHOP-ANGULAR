import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log/log-in/log-in.component';
import { HomeComponent } from './Basic/home/home.component';
import { OrderComponent } from './Basic/order/order.component';
import { OrderAddComponent } from './Basic/order/order-add/order-add.component';
import { OrderListComponent } from './Basic/order/order-list/order-list.component';
import { OrderEditComponent } from './Basic/order/order-edit/order-edit.component';
import { LogOutComponent } from './log/log-out/log-out.component';
import { HeaderComponent } from './Basic/header/header.component';
import { FooterComponent } from './Basic/footer/footer.component';
import { DairyComponent } from './product/dairy/dairy.component';
import { GroceryComponent } from './product/grocery/grocery.component';
import { KitchenWareComponent } from './product/kitchen-ware/kitchen-ware.component';
import { PersonalCareComponent } from './product/personal-care/personal-care.component';
import { PharmacyComponent } from './product/pharmacy/pharmacy.component';
import { StationaryComponent } from './product/stationary/stationary.component';
import { VegetablesComponent } from './product/vegetables/vegetables.component';

const routes: Routes = [

  {path: '', component: HomeComponent},



// {path: '', component: LogInComponent},

{path: 'home', component: HomeComponent},

{path: 'order', component: OrderComponent},
{path: 'order-add', component: OrderAddComponent},
{path: 'order-list', component: OrderListComponent},
{path: 'order-edit/:orderID', component: OrderEditComponent},

{path: 'login', component: LogInComponent},
{path: 'logout', component: LogOutComponent},

{path: 'hdr', component: HeaderComponent},
{path: 'ftr', component: FooterComponent},

{path: 'dairy', component: DairyComponent},
{path: 'grocery', component: GroceryComponent},
{path: 'kitchenWare', component: KitchenWareComponent},
{path: 'perCare', component: PersonalCareComponent},
{path: 'pharmacy', component: PharmacyComponent},
{path: 'stationery', component: StationaryComponent},
{path: 'vegetable', component: VegetablesComponent},



{path: '**', component: HomeComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
