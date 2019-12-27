import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('chart', {static: true}) chart;

  bars: any;
  colorArray: any;
  constructor() { }

  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.chart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['4월','5월','6월','7월','8월','4월','5월'],
        datasets: [{
          label: '평균 기온',
          data: [10, 8, 5, 25, 30, 7.5, 10],
          backgroundColor: 'rgb(255, 40, 0)', // 그래프 색
          borderColor: 'rgb(255, 40, 0)',// 테두리 색
          borderWidth: 1
        }]
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
