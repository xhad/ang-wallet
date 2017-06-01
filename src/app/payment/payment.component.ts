import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  money:number = 100;
  checkFunds(){
    this.money = this.money + Math.random()*.8;
  }

  paymentOut = 0;
  decreaseMoney(){
    this.money -= this.paymentOut;
  }
}
