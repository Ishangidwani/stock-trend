import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stock-tracker';
  refreshList: Array<number> = [5,10,15];
  refreshTimeInSec: number = 15;
  stocks: Array<any> = [{
    name: "RELIANCE",
    key: "NSE:RELIANCE",
    start: 75,
    end: 85,
    isChecked: true
  },{
    name: "HDFC Bank",
    key: "NSE:HDFC",
    start: 1080,
    end: 1150,
    isChecked: false
  },{
    name: "Apple",
    key: "NASDAQ:AAPL",
    isChecked: false,
    start: 240,
    end: 300,
  },{
    name: "Yahoo",
    key: "NASDAQ:YHOO",
    start: 850,
    end: 900,
    isChecked: false
  }]
}
