import { Component } from '@angular/core';
import { MenuService } from '../shared/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItems = ['Home', 'About', 'Services', 'Contact'];

  constructor(private menuService: MenuService) {}

  selectMenuItem(item: string): void {
    this.menuService.setActiveItem(item);
  }
}