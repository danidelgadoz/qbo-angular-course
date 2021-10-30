import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ...AppRoutingModule.components
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
