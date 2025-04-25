import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  sessionStorageKey = 'basket';

  getBasketData(): Map<Product, number> {
    const json = localStorage.getItem(this.sessionStorageKey);
    if (json) {
        const entries: [Product, number][] = JSON.parse(json);
        return new Map(entries);
    }
    return new Map<Product, number>();
  }

  removeSession(): void {
    localStorage.removeItem(this.sessionStorageKey);
  }

  saveSession(basketMap: Map<Product, number>): void {
    localStorage.setItem(this.sessionStorageKey, JSON.stringify(Array.from(basketMap.entries())));
  }

}
