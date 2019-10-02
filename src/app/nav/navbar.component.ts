import { Component, Inject } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { EventService, ISession } from '../shared';

@Component({
  selector: 'app-nav',
  templateUrl: 'navbar.component.html',
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }
      #searchForm {
        margin-right: 100px;
      }
      ,
      @media (max-width:1200px) {
        #searchForm {
          display: none;
        }
      }
      li > a.active {
        color: #f97924;
      }
    `
  ]
})
export class NavBarComponent {
  searchTerm = '';
  auth: AuthService;
  foundSessions: ISession[];
  constructor(
    @Inject(AuthService) auth: AuthService,
    @Inject(EventService) private eventService: EventService
  ) {}
  searchSessions(searchTerm: string) {
    this.eventService
      .searchSessions(searchTerm)
      .subscribe((sessions: ISession[]) => {
        this.foundSessions = sessions;
      });
  }
}
