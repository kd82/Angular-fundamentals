import { Error404Component } from './app/errors/404.component';
import {
  EventListResolver,
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator
} from './app/events/index';
import { CreateSessionComponent } from './app/events/event-details/create-session.component';

export const appRoutes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: [EventRouteActivator]
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver }
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator]
  },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '', pathMatch: 'full', redirectTo: '/events' },
  { path: 'user', loadChildren: './user/user.module#UserModule' }
];
