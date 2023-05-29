import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Angular pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Strings and dates',
            icon: 'pi pi-align-left',
            routerLink: [''],
          },
          { label: 'Numbers', icon: 'pi pi-dollar', routerLink: ['/numbers'] },
          {
            label: 'Not common',
            icon: 'pi pi-globe',
            routerLink: ['/uncommon'],
          },
        ],
      },
      {
        label: 'Custom pipes',
        icon: 'pi pi-cog',
        items: [
          { label: 'Custom pipes', icon: 'pi pi-cog', routerLink: ['/custom'] },
        ],
      },
    ];
  }
}
