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
  }


  changeCourseImage() {
    console.log('before change image:', this.course.image);
    this.course.image = 'https://scotch-res.cloudinary.com/image/upload/w_1500,q_auto:good,f_auto/media/1/NQ9wdTPDQnmbZgNlcnao_my-first-angular-site.jpg';
    console.log('after change image:', this.course.image);
  }



}
