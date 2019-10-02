import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';

@Component({
  templateUrl: 'events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  ngOnInit(): void {
    this.events = this.route.snapshot.data.events;
  }
  constructor(
    @Inject(EventService) private eventService: EventService,
    @Inject(ActivatedRoute) private route: ActivatedRoute
  ) {}
}
