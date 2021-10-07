import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.scss']
})
export class ExampleComponentComponent implements OnInit {
  course = {
    name: 'Angular for Developers',
    price: 100
  };

  constructor() { }

  ngOnInit(): void {
  }

}
