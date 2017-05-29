import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {

  stockCode = 'IBM';
  price: number;

  constructor() {
    setInterval(() => {
      const priceQuote: PriceQuote = new PriceQuote(this.stockCode, 100 * Math.random());
      this.price = priceQuote.lastPrice;
    }, 1000);
  }

  ngOnInit() {
  }

}

export class PriceQuote {
  constructor(public stockCode: string, public lastPrice: number) {

  }
}
