import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay, filter, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-example-rxjs',
  templateUrl: './example-rxjs.component.html',
  styleUrls: ['./example-rxjs.component.scss']
})
export class ExampleRxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.testingRxJS();
    this.testingRxJSTwo();
  }

  testingRxJSTwo() {
    console.log('testingRxJSTwo...');

    of(
      { id: 1, nickname: 'Admin' },
      { id: 100, nickname: 'user001' },
      { id: 400, nickname: 'user002' },
      { id: 200, nickname: 'user003' },
      { id: 300, nickname: 'user004' },
    )
    .pipe(
      filter(user => user.nickname !== 'Admin'),
      map(user => user.nickname),
      delay(3000),
      take(2)
    )
    .subscribe(
      (user) => {
        console.log('user', user)
      }
    )
  }

  testingRxJS() {
    console.log('testingRxJS...');

    of(10, 20, 30, 40, 50)
      .pipe(
        filter((value) => value > 15),
        map((value) => value*2)
      )
      .subscribe(
        (value) => {
          console.log('value flow:', value);
        }
      )
  }

}
