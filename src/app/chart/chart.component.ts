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

  loadingOpts: any = {
    text: 'loading',
    color: '#c23531',
    textColor: '#000',
    maskColor: 'rgba(255, 255, 255, 0.8)',
    zlevel: 0
  }
  timer: any;  
  @ViewChild("chartcontext")
  chartcontext: any;
  constructor() { }

  ngOnInit(): void {
    // generate some random testing data:
    this.lineChartData.push({ data: [], label: this.name })
    for(let i = 0;i< 20;i++){
        this.randomData(new Date(new Date().getTime() + (i*1000*10)- 300000));
    }

    // Mock dynamic data:
    this.now();
  }
  now(){
    this.timer = setInterval(() => {
      this.lineChartData[0].data.shift();
      this.lineChartLabels.shift();
      this.randomData(new Date());
    }, 1000);
  }
  ngAfterViewInit(){
    console.log(this.chartcontext)
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }

  randomData(date: Date) {
    //add random into data
    let value = this.getRandomArbitrary(75, 85);
    this.lineChartData[0].data.push(value.toFixed(2));
    let currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    this.lineChartLabels.push(currentTime);
  }
  getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }


}
