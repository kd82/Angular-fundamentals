import { Inject } from '@angular/core';
import { EventService } from './event.service';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';
export class EventListResolver implements Resolve<any> {
  resolve(
    route: import ('@angular/router').ActivatedRouteSnapshot,
    state: import ('@angular/router').RouterStateSnapshot
  ) {
    return this.eventService.getEvents().pipe(map(events => events));
  }
  constructor(@Inject(EventService) private eventService: EventService) {}
}
