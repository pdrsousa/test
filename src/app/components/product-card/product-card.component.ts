import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  public productName: string = 'A2000 Infield Baseball Glove';
  public productOptions: string[] = ['small', 'medium', 'large'];
  public productPrice: number;
  public discount: number;
  constructor() {
  }

  ngOnInit(): void {
    this.productPrice = 250.00;
    this.discount = 0.2;
  }

}
