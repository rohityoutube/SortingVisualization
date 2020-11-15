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
    { name: "Mobiles", value: 9000 },
    { name: "Laptop", value: 550 },
    { name: "AC", value: 1500 },
    { name: "Headset", value: 1900 },
    { name: "Fridge", value: 1000 },
    { name: "sofa", value: 2300 },
    { name: "telephone", value: 2400 },
    { name: "chair", value: 2500 },
    { name: "car", value: 2600 },
    { name: "bike", value: 700 },
    { name: "aeroplane", value: 2800 }

  ];
  ngOnInit(): void {


  }
  sort() {

    var sortedarr = this.bubblesort(this.saleData);
  }
  sleep() {var d = new Date();
    console.log(d);
    console.log(d.getMilliseconds());
    return new Promise(resolve => setTimeout(resolve, 90));
    
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
