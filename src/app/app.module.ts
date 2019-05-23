import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WithErrorComponent } from './with-error/with-error.component';
import { WithoutErrorComponent } from './without-error/without-error.component';

@NgModule({
  declarations: [
    AppComponent,
    WithErrorComponent,
    WithoutErrorComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
