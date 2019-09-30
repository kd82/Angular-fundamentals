import { Component, Input } from '@angular/core';
import { ISession } from 'src/app/shared';

@Component({
  selector: 'app-session-list',
  templateUrl: 'session-list.component.html'
})
export class SessionListComponent {
  @Input() sessions: ISession[];
}