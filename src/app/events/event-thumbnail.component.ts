import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{ eventdata.name }}</h2>
      <div>Date: {{ eventdata.date }}</div>
      <div>Time: {{ eventdata.time }}</div>
      <div>Price: \${{ eventdata.price }}</div>
      <div>
        <span>Location: {{ eventdata.location.address }}</span>
        <span>&nbsp;</span>
        <span
          >{{ eventdata.location.city }}, {{ eventdata.location.country }}</span
        >
      </div>
    </div>
  `
})
export class EventsThumbnailComponent {
  @Input() eventdata: any;
  someProperty: any = 'Some value';
  logFoo() {
    console.log('goo');
  }
}
