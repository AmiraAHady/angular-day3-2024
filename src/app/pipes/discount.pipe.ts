import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {

  transform(value: number,disVal:number): number {
    // value=200
        let discPercent = disVal /100;
        let discountValue = value * discPercent;//100
        let finalPrice=value-discountValue;//200-100=100
        return finalPrice;
      }

}
