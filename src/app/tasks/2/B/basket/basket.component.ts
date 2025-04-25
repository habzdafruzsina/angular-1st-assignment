import { Component } from '@angular/core';
import { Product } from '../product';
import { BasketService } from './basket.service';

@Component({
    selector: 'app-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.less'],
    standalone: false
})
export class BasketComponent {

  map: Map<Product, number> = new Map<Product, number>();

  constructor(private basketService: BasketService){}

  ngOnInit(){
    this.map = this.basketService.getBasketData();
    console.log(this.map instanceof Map);
  }

  addProduct(product: Product){
    let quantity = 0;
    const current = this.map.get(product);

    if (current !== undefined) {
      quantity = current;
    }

    this.map.set(product, quantity+1);
    this.basketService.saveSession(this.map);
  }

  decreaseProduct(product: Product){
    let quantity = 1;
    const current = this.map.get(product);

    if (current !== undefined) {
      quantity = current;
    }

    this.map.set(product, quantity-1);
    this.basketService.saveSession(this.map);
  }

  confirmRemove(product: Product){
    this.map.delete(product);
    this.basketService.saveSession(this.map);
  }

  cancelRemove(){}
}
