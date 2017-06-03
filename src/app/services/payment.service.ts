
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/**
 * Angular depends on using rxjs and observables. See below for an example
 */


@Injectable()
export class PaymentService {

  /**
   * private just makes the method or variable only accessible from inside this class.
   */
  private fakeResponse = {data: 'paymentId: "asdfasdf"', status: 'success'};

  /**
   * This is just a fake provider that returns the fake response above.
   */

  sendPayment(): Observable<any> {
    // just a fake endpoint service
    return new Observable(observer => {
      observer.next(this.fakeResponse);
    });
  }
}



/**
  The convention is to suffix observables with a $.
 The observer.next sends the data to any subscribers.
 **/

const PIEhouseCounter$ = new Observable(observer => {
  for (let i = 0; i <= 10; i += 1) {
    observer.next(i);
  }
});


PIEhouseCounter$.subscribe(x => {
  console.log(x);
});
