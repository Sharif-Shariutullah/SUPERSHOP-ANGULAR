import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DairyComponent } from './product/dairy/dairy.component';
import { GroceryComponent } from './product/grocery/grocery.component';
import { StationaryComponent } from './product/stationary/stationary.component';
import { VegetablesComponent } from './product/vegetables/vegetables.component';
import { PersonalCareComponent } from './product/personal-care/personal-care.component';
import { PharmacyComponent } from './product/pharmacy/pharmacy.component';
import { KitchenWareComponent } from './product/kitchen-ware/kitchen-ware.component';
import { LogInComponent } from './log/log-in/log-in.component';
import { LogOutComponent } from './log/log-out/log-out.component';
import { HomeComponent } from './Basic/home/home.component';
import { HeaderComponent } from './Basic/header/header.component';
import { FooterComponent } from './Basic/footer/footer.component';
import { OrderComponent } from './Basic/order/order.component';
import { OrderAddComponent } from './Basic/order/order-add/order-add.component';
import { OrderListComponent } from './Basic/order/order-list/order-list.component';
import { OrderEditComponent } from './Basic/order/order-edit/order-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    DairyComponent,
    GroceryComponent,
    StationaryComponent,
    VegetablesComponent,
    PersonalCareComponent,
    PharmacyComponent,
    KitchenWareComponent,
    LogInComponent,
    LogOutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OrderComponent,
    OrderAddComponent,
    OrderListComponent,
    OrderEditComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
