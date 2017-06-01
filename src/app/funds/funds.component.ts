import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  currentFundsUSD = 100;
  currentFundsKRW = 12000;
}
