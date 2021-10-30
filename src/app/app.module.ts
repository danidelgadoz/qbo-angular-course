import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './shared/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightDirective } from './dashboard/example/example-directives-and-pipes/highlight.directive';
import { OnlyNumber } from './dashboard/example/example-directives-and-pipes/only-number.directive';
import { ReversePipe } from './dashboard/example/example-directives-and-pipes/reverse.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './core/http/app.interceptor';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    OnlyNumber,
    ReversePipe,
    [...AppRoutingModule.components]
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
