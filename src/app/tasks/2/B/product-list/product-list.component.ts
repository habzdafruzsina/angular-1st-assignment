import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.less'],
    standalone: false
})
export class ProductListComponent {
  
  @Input() productList!: Product[];
  @Output() productAddClickedEvent: EventEmitter<Product> = new EventEmitter<Product>();

  productAddClickedEmit(product: Product) {
    this.productAddClickedEvent.emit(product);
  }
}
