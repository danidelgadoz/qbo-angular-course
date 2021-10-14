import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './shared/material.module';
import { AppComponent } from './app.component';
import { ExampleComponentComponent } from './example/example-component/example-component.component';
import { ExampleBootstrapComponent } from './example/example-bootstrap/example-bootstrap.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleAngularMaterialComponent } from './example/example-angular-material/example-angular-material.component';
import { ExampleFlexLayoutComponent } from './example/example-flex-layout/example-flex-layout.component';
import { ExampleDirectivesAndPipesComponent } from './example/example-directives-and-pipes/example-directives-and-pipes.component';
import { HighlightDirective } from './example/example-directives-and-pipes/highlight.directive';
import { OnlyNumber } from './example/example-directives-and-pipes/only-number.directive';
import { ReversePipe } from './example/example-directives-and-pipes/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponentComponent,
    ExampleBootstrapComponent,
    ExampleAngularMaterialComponent,
    ExampleFlexLayoutComponent,
    ExampleDirectivesAndPipesComponent,
    HighlightDirective,
    OnlyNumber,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
