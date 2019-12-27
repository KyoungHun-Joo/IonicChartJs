import { Component, OnInit,ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'bubble',
  templateUrl: 'bubble.page.html',
  styleUrls: ['bubble.page.scss']
})
export class BubblePage implements OnInit {
    @ViewChild('bubble', {static: true}) bubble;

    bars: any;
    colorArray: any;
    constructor() { }

    ngOnInit() {
        this.bars = new Chart(this.bubble.nativeElement, {
          type: 'bubble',
          data:{
              datasets:[{
                  label:"First Dataset",
                  data:[{"x":20,"y":30,"r":15},{"x":40,"y":10,"r":10}],
                  backgroundColor:"rgb(255, 99, 132)"}
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
