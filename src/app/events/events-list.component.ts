import { Component } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: 'events-list.component.html'
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2020',
    price: '5.99',
    time: '10:10 am',
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };
}
