import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }
  chart = [];
  arr=[46, 10, 5, 2, 20, 30, 45];
  backcolor=[
  'rgba(0, 0, 0, 0.9)',
  'rgba(0, 0, 0, 0.9)',
  'rgba(0, 0, 0, 0.9)',
  'rgba(0, 0, 0, 0.9)',
  'rgba(0, 0, 0, 0.9)',
  'rgba(0, 0, 0, 0.9)',
  'rgba(0, 0, 0, 0.9)'
  //,
  // 'rgba(0, 0, 0, 0.9)',
  // 'rgba(255, 206, 86, 0.9)',
  // 'rgba(75, 192, 192, 0.9)',
  // 'rgba(153, 102, 255, 0.2)',
  // 'rgba(255, 159, 64, 0.2)',
  // 'rgba(255, 159, 64, 0.9)'
];
  ngOnInit(): void {

    this.data();
  }

  data() {
    this.chart = new Chart('canvas', {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: this.backcolor,
          borderColor: 'rgba(0, 0, 0, 0.9)',
          data: this.arr
        }]
      },

      // Configuration options go here
      options: {
        tooltips: {
          mode: 'index'
      },
      responsive: true,
      maintainAspectRatio: true,
      animation: {
          duration: 0,
      },
      hover: {
          animationDuration: 0,
      },
      responsiveAnimationDuration: 0
     
      }
    });
  }

  sort(){
    this.bubblesort(this.arr);
  }

  async bubblesort(array) {
    //  console.log(arr)
    let n = array.length;
    //console.log(n);
    for (var i = 0; i < n - 1; i++) {
      for (var j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;

           this.arr = Array.from(array);
          this.data();
          await timer(500).pipe(take(1)).toPromise();
          //  return arr;
        }

      }

    }
  }

}
