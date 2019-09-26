import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: any;
  ngOnInit(): void {
    this.events = this.route.snapshot.data.events;
  }
  constructor(
    @Inject(EventService) private eventService: EventService,
    @Inject(ToastrService) private toastrService: ToastrService,
    @Inject(ActivatedRoute) private route: ActivatedRoute
  ) {}

  handleThumbnailClick(eventName: string) {
    this.toastrService.success(eventName);
  }
}
