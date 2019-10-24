import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { EventService, ISession, IEvent } from '../shared';

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
export class NavBarComponent implements OnInit {
  public auth: AuthService;
  constructor(
    @Inject(EventService) private eventService: EventService
  ) {}
  searchTerm = '';
  foundSessions: ISession[];
  events: IEvent[];
  ngOnInit(): void {
    this.eventService.getEvents().subscribe((data) => {
      this.events = data;
    }
    );
  }
  searchSessions(searchTerm: string) {
    this.eventService
      .searchSessions(searchTerm)
      .subscribe((sessions: ISession[]) => {
        this.foundSessions = sessions;
      });
  }
}
