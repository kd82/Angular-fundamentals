import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'events-app',
  template: `
  <app-events-list></app-events-list>
  `
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
