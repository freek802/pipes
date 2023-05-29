import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  //i18n select
  public name: string = 'Omar';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invite you male',
    female: 'invite you female',
  };

  changeClient(): void {
    this.name = 'Pancho';
    this.gender = 'female';
  }

  //i8 plural
  public clients: string[] = [
    'Maria',
    'Pepe',
    'Fernando',
    'Melissa',
    'Natalia',
  ];
  public clientsMap = {
    '=0': 'We do not have clients waiting',
    '=1': 'We have one clients waiting',
    '=2': 'We have two clients waiting',
    other: 'We have # clients waiting',
  };

  deleteClient(): void {
    this.clients.pop();
  }

  //keyvalue pipie
  public person = {
    name: 'omar',
    age: 33,
    country: 'Mexico',
  };

  //async pipe
  public myObservableTimer = interval(2000).pipe(
    tap((value) => console.log(value))
  );

  public promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('We have data in the promise.');
    }, 3500);
  });
}
