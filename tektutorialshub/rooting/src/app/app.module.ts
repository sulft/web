import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ErrorComponent } from './error/error.component';

//service
import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductSpecComponent } from './product-spec/product-spec.component';
import { FormsModule } from '@angular/forms';
import { ProductGuardService } from './product-guard.service';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductComponent,
    ErrorComponent,
    ProductDetailComponent,
    ProductOverviewComponent,
    ProductSpecComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductGuardService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
