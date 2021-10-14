import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-angular-material',
  templateUrl: './example-angular-material.component.html',
  styleUrls: ['./example-angular-material.component.scss']
})
export class ExampleAngularMaterialComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
