import { Component, VERSION, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  constructor() {}
  
  ngOnInit() {
    console.clear();
    this.exercise();
  }

  exercise() {
    from([20, 15, 10, 5])
      .subscribe(
          item => console.log(`resulting item: ${item}`),
          err => console.log(`error occurred: ${err}`),
          () => console.log('complete')
      );
  }

}
