import { Component, OnInit,ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'line',
  templateUrl: 'line.page.html',
  styleUrls: ['line.page.scss']
})
export class LinePage implements OnInit {
    @ViewChild('line', {static: true}) line;

    bars: any;
    colorArray: any;
    constructor() { }

    ngOnInit() {
        this.bars = new Chart(this.line.nativeElement, {
          type: 'line',
          data:{
              labels:["January","February","March","April","May","June","July"],
              datasets:[{"label":"My First Dataset","data":[65,59,80,81,56,55,40],"fill":false,"borderColor":"rgb(75, 192, 192)","lineTension":0.1}]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
    }
}
