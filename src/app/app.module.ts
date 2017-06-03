import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FundsComponent } from './funds/funds.component';
import { PaymentComponent } from './payment/payment.component';

import { PaymentService } from './services/payment.service';

@NgModule({
  declarations: [
    AppComponent,
    FundsComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    /**
     * and import the PaymentService provider here. Now it's available in
     * all of your components.
     */
    PaymentService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
