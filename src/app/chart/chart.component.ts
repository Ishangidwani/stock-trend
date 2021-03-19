import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { of } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input()
  name: string = "";

  @Input()
  startValue: number = 80;
  @Input()
  endValue: number = 85;

  @Input()
  refreshTimeInSec: number = 15;

  public lineChartData: Array<any> = [

  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: any = {
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'white'
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  timer: any;

  constructor() { }

  ngOnInit(): void {
    // generate some random testing data:
    this.lineChartData.push({
      data: [], 
      label: this.name,
      color: "blue",
      backgroundColor: "rgba(159,170,174,0.8)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(232,105,90,0.8)",
      hoverBorderColor: "orange",
    })
    for (let i = 0; i < 20; i++) {
      this.randomData(new Date(new Date().getTime() + (i * 1000 * 10) - 300000));
    }

    // Mock dynamic data:
    this.now();
  }
  now() {
    let refresh = this.refreshTimeInSec * 1000;
    console.log("Next refresh in ", refresh);
    this.timer = setTimeout(() => {
      clearTimeout(this.timer);
      this.lineChartData[0].data.shift();
      this.lineChartLabels.shift();
      this.randomData(new Date());
      this.now();
    }, refresh);
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    
  }

  randomData(date: Date) {
    //add random into data
    let value = this.getRandomArbitrary(this.startValue, this.endValue);
    this.lineChartData[0].data.push(value.toFixed(2));
    let currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    this.lineChartLabels.push(currentTime);
  }
  getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }


}
