import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.scss']
})
export class ExampleComponentComponent implements OnInit {
  course = {
    name: 'Angular for Developers',
    image: 'https://miro.medium.com/max/1302/1*MCJlRDOghcQFh-GSVBpV1A.png'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
