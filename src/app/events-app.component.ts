import { Component, Inject } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'events-app',
  template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
    constructor(@Inject(AuthService) private auth: AuthService) {}

    ngOnInit() {
      this.auth.checkAuthenticationStatus();
    }
}
