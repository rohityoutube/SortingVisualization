import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mycharts';
  // saleData;
  x = Math.floor((Math.random() * 100000) + 1);
  saleData = [
    { name: "Mobiles", value: 9000 },{ name: "sofa", value: 2300 },    { name: "car", value: 2600 },
    { name: "Laptop", value: 550 },
    { name: "AC", value: 1500 },
    { name: "Headset", value: 1900 },
    { name: "Fridge", value: 1000 },
    
    { name: "telephone", value: 2400 },
    { name: "chair", value: 2500 },

    { name: "bike", value: 700 },
    { name: "aeroplane", value: 2800 }

  ];
  reload(){
  window.location.reload()
  }
  ngOnInit(): void {
  }
  sort() {
    var sortedarr = this.bubblesort(this.saleData);
  }

  SelectionSort() {
    this.selectionSort(this.saleData);
  }
  async selectionSort(inputArr) {
    let n = inputArr.length;

    for (let i = 0; i < n; i++) {
      // Finding the smallest number in the subarray
      let min = i;
      for (let j = i + 1; j < n; j++) {
        if (inputArr[j]["value"] < inputArr[min]["value"]) {
          min = j;
        }
      }
      if (min != i) {
        // Swapping the elements
        let tmp = inputArr[i];
        inputArr[i] = inputArr[min];
        inputArr[min] = tmp;
        this.saleData = Array.from(inputArr);

        await timer(500).pipe(take(1)).toPromise();
      }
    }
    //return inputArr;
  }

  async bubblesort(arr) {
    //  console.log(arr)
    let n = arr.length;
    //console.log(n);
    for (var i = 0; i < n - 1; i++) {
      for (var j = 0; j < n - i - 1; j++) {
        if (arr[j]["value"] > arr[j + 1]["value"]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;

          this.saleData = Array.from(arr);

          await timer(500).pipe(take(1)).toPromise();
          //  return arr;
        }

      }

    }
  }

}
