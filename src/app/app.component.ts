import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stock-tracker';
  stocks: Array<any> = [{
    name: "RELIANCE",
    key: "NSE:RELIANCE",
    isChecked: true
  },{
    name: "HDFC Bank",
    key: "NSE:HDFC",
    isChecked: false
  },{
    name: "Apple",
    key: "NASDAQ:AAPL",
    isChecked: false
  },{
    name: "Yahoo",
    key: "NASDAQ:YHOO",
    isChecked: false
  }]
}
