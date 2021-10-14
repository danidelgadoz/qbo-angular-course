import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-directives-and-pipes',
  templateUrl: './example-directives-and-pipes.component.html',
  styleUrls: ['./example-directives-and-pipes.component.scss']
})
export class ExampleDirectivesAndPipesComponent implements OnInit {

  products = [
    { name: 'Laptop Macbook Pro', price: 8000 },
    { name: 'Monitor Samsung', price: 1500 },
    { name: 'Keyboard magic 2', price: 800 },
    { name: 'Headphones', price: 150 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
