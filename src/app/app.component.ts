import { Component } from '@angular/core';
import { PaymentService } from './services/payment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Ben's Wallet";


  /**
   *
   * This is a dependency injection of the Payment Service.
   * Remeber, to use this servie, you need to import it in your
   * app.module.ts
   */
  constructor(private paymentService: PaymentService) {

    this.paymentService.sendPayment()
      .subscribe(data => { console.log(data); });
  }
}
