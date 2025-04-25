import { Component, ViewChild } from '@angular/core';
import { Product } from './product';
import { BasketComponent } from './basket/basket.component';

@Component({
    selector: 'app-task2-b',
    templateUrl: './task2-b.component.html',
    styleUrls: ['./task2-b.component.less'],
    standalone: false
})
export class Task2BComponent {

  productList: Product[] = this.createProductArray();
  @ViewChild('basketRef') basket!: BasketComponent;

  constructor() { }

  createProductArray(): Product[]{
    return Array.of(
      new Product("tál", "anyaga: fém", 1500),
      new Product("tányér", "kézműves porcelán", 3500),
      new Product("fakanál", "anyaga: fa", 500),
      new Product("vágódeszka", "anyaga: fa, mérete: 20*30 cm", 2000),
      new Product("serpenyő", "átmérője: 25 cm", 4000)
    );
  }

  addProductToBasket(product: Product){
    this.basket.addProduct(product);
  }
}
