import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private activeItem: string;

  constructor() {}

  setActiveItem(item: string) {
    this.activeItem = item;
  }

  getActiveItem(): string | undefined {
    return this.activeItem;
  }
}