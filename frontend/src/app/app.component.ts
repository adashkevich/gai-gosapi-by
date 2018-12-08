import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showSidenav = false;

  public publicLinks = [
    {
      caption: 'Send a form',
      routerLink: '',
      icon: 'home'
    },
    {
      caption: 'About Us',
      routerLink: 'about',
      icon: 'view_list'
    },
    {
      caption: 'Statistic',
      routerLink: 'statistic',
      icon: 'graphic_eq'
    }
  ];

  closeSidenav() {
    this.showSidenav = false;
  }

  openSidenav() {
    this.showSidenav = true;
  }
}
