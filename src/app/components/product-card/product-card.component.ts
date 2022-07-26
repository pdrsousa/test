import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  public productName: string = 'a2000 infield baseball glove';
  public productOptions: string[] = ['small', 'medium', 'large'];
  public productPrice: number;
  public discount: number;
  public availableQuantity: number = 3;
  constructor() {
  }

  ngOnInit(): void {
    this.productPrice = 250.00;
    this.discount = 0.6;
  }

  public buyNow(): void {
    if(this.availableQuantity) {
      this.availableQuantity--;
    }
  }
}
