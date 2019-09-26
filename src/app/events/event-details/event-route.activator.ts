import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Inject } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

export class EventRouteActivator implements CanActivate {
  path: import ('@angular/router').ActivatedRouteSnapshot[];
  route: import ('@angular/router').ActivatedRouteSnapshot;
  constructor(
    @Inject(EventService) private eventService: EventService,
    @Inject(Router) private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+route.params.id);
    if (!eventExists) { this.router.navigate(['/404']); }
    return eventExists;
  }
}
