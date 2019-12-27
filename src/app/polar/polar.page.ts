import { Component, OnInit,ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'polar',
  templateUrl: 'polar.page.html',
  styleUrls: ['polar.page.scss']
})
export class PolarPage implements OnInit {
    @ViewChild('polar', {static: true}) polar;

    bars: any;
    colorArray: any;
    constructor() { }

    ngOnInit() {
        this.bars = new Chart(this.polar.nativeElement, {
          type: 'polarArea',
          data:{
              labels:["Red","Green","Yellow","Grey","Blue"],
              datasets:[{
                  label:"My First Dataset",
                  data:[11,16,7,3,14],
                  backgroundColor:["rgb(255, 99, 132)","rgb(75, 192, 192)","rgb(255, 205, 86)","rgb(201, 203, 207)","rgb(54, 162, 235)"]}
              ]},
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
