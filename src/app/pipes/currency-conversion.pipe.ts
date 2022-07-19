import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConversion'
})
export class CurrencyConversionPipe implements PipeTransform {

  transform(value: number): number {
    return Math.round((value * 1.17) * 100) / 100;
  }

}
