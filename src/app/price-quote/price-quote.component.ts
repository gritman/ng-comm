import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {

  stockCode = 'IBM';
  price: number;

  @Output('priceChange') // 如果不写priceChange,外部捕获时直接用变量名
  lastPriceQuote: EventEmitter<PriceQuote> = new EventEmitter();

  constructor() {
    setInterval(() => {
      const priceQuote: PriceQuote = new PriceQuote(this.stockCode, 100 * Math.random());
      this.price = priceQuote.lastPrice;
      this.lastPriceQuote.emit(priceQuote);
    }, 1000);
  }

  ngOnInit() {
  }

}

export class PriceQuote {
  constructor(public stockCode: string, public lastPrice: number) {

  }
}
