import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleComponentComponent } from './example/example-component/example-component.component';
import { ExampleBootstrapComponent } from './example/example-bootstrap/example-bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponentComponent,
    ExampleBootstrapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
