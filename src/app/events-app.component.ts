import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'events-app',
  template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
