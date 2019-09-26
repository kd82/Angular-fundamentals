import { EventsListComponent } from './app/events/events-list.component';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';
import { CreateEventComponent } from './app/events/create-event.component';
import { Error404Component } from './app/errors/404.component';
import { EventRouteActivator } from './app/events/event-details/event-route.activator';
import { EventListResolver } from './app/shared/events-list-resolver.service';
export const appRoutes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: [EventRouteActivator] },
  { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver }},
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component },
  { path: '', pathMatch: 'full', redirectTo: '/events' }
];
