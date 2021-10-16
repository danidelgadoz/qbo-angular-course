import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.scss']
})
export class ExampleComponentComponent implements OnInit {
  course = {
    name: 'Angular for Developers',
    image: 'https://miro.medium.com/max/1302/1*MCJlRDOghcQFh-GSVBpV1A.png',
    session: 12
  };

  constructor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('1. ExampleComponentComponent -> ngOnInit');
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('2. ExampleComponentComponent -> ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('3. ExampleComponentComponent -> ngAfterViewInit');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('4. ExampleComponentComponent -> ngOnDestroy');
  }

  changeCourseImage() {
    console.log('before change image:', this.course.image);
    this.course.image = 'https://scotch-res.cloudinary.com/image/upload/w_1500,q_auto:good,f_auto/media/1/NQ9wdTPDQnmbZgNlcnao_my-first-angular-site.jpg';
    console.log('after change image:', this.course.image);
  }

}
