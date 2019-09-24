import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'app-events-list',
  templateUrl: 'events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: any[];
  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }
  constructor(
    @Inject(EventService) private eventService: EventService,
    @Inject(ToastrService) private toastrService: ToastrService
  ) {}

  handleThumbnailClick(eventName: string) {
    this.toastrService.success(eventName);
  }
}
