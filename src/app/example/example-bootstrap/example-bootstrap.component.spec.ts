import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleBootstrapComponent } from './example-bootstrap.component';

describe('ExampleBootstrapComponent', () => {
  let component: ExampleBootstrapComponent;
  let fixture: ComponentFixture<ExampleBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleBootstrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
