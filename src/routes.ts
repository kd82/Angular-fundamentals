import { EventsListComponent } from './app/events/events-list.component';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';
export const appRoutes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/events' }
];
