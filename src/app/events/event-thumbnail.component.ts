import { Component, Input } from '@angular/core';

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
        <span class="pad-left"></span>
        <span
          >{{ eventdata.location.city }}, {{ eventdata.location.country }}</span
        >
      </div>
    </div>
  `,
  styles: [
    `
      .pad-left {margin-left: 10px;}
      .well div {color:#bbb;}
    `
  ]
})
export class EventsThumbnailComponent {
  @Input() eventdata: any;
}
