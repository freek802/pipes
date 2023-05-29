import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Wonderful woman',
      canFly: true,
      color: Color.green,
    },
    {
      name: 'Anastacio',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Pancho',
      canFly: true,
      color: Color.black,
    },
    {
      name: 'MAria',
      canFly: false,
      color: Color.blue,
    },
    {
      name: 'Petra',
      canFly: false,
      color: Color.green,
    },
  ];

  toogleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }
}
