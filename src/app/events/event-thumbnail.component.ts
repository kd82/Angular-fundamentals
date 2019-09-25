import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div [routerLink]="['/events', eventdata.id]" class="well hoverwell thumbnail">
      <h2>{{ eventdata?.name }}</h2>
      <div>Date: {{ eventdata?.date }}</div>
      <div [ngSwitch]="eventdata?.time" [ngStyle]="getStartTimeStyle()">
        Time: {{ eventdata?.time }}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{ eventdata?.price }}</div>
      <div [hidden]="!eventdata?.location">
        <span>Location: {{ eventdata?.location?.address }}</span>
        <span class="pad-left"></span>
        <span
          >{{ eventdata?.location?.city }},
          {{ eventdata?.location?.country }}</span
        >
      </div>
      <div [hidden]="!eventdata?.onlineUrl">
        Online URL : {{ eventdata?.onlineUrl }}
      </div>
    </div>
  `,
  styles: [
    `
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
      .thumbnail {
        min-height: 210px;
      }
    `
  ]
})
export class EventsThumbnailComponent {
  @Input() eventdata: any;

  getStartTimeStyle() {
    if (this.eventdata && this.eventdata.time === '8:00 am') {
      return { color: '#003300', 'font-weight': 'bold' };
    }
    return { color: '#bbb', 'font-weight': 'normal' };
  }
}
