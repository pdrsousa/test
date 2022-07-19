import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CurrencyConversionPipe } from './pipes/currency-conversion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    CurrencyConversionPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
