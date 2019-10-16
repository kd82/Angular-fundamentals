import { Inject } from '@angular/core';
import { EventService } from '../shared/event.service';
import { Resolve } from '@angular/router';
export class EventResolver implements Resolve<any> {
  constructor(@Inject(EventService) private eventService: EventService) {}

  resolve(
    route: import ('@angular/router').ActivatedRouteSnapshot,
    state: import ('@angular/router').RouterStateSnapshot
  ) {
    return this.eventService.getEvent(route.params.id);
  }

}
