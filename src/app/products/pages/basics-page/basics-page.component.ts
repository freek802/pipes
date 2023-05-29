import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower: string = 'omaR';
  public nameUpper: string = 'omAr ';
  public fullName: string = 'omar alexis';

  public customDate: Date = new Date();
}
