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

  change:number = 0;
  money:number = 100;
  paymentOut:number = 0;
  paymentIn:number = 0;
  checkFunds(){
    this.money = this.money + Math.random()*.8;
    this.money = parseFloat((this.money).toFixed(2));
  }

  decreaseMoney(){
    this.money -= this.paymentOut;
  }
  increaseMoney(){
    this.money += this.paymentIn;
  }
}
