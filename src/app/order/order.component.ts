import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() // 如果希望父组件传递该属性到当前组件(子组件),必须声明此注解
  stockCode: string;

  @Input()
  amount: number;

  constructor() {
    setInterval(() => {
      this.stockCode = 'Apple';
    }, 3000);
  }

  ngOnInit() {
  }

}





