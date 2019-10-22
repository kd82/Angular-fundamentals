import { SessionListComponent } from './session-list.component';
import { ISession } from 'src/app/shared';
describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let mockVoterService;
  let mockAuthService;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  });
  describe('ngOnChanges', () => {
    it('Should filter the sessions correctly', () => {
      component.sessions =  [
        { name: 'session 1', level: 'intermediate' },
        { name: 'session 2', level: 'intermediate' },
        { name: 'session 3', level: 'beginner' }
      ] as ISession[];
      component.filterBy = 'intermediate';
      component.eventId = 3;
      component.ngOnChanges();
      expect(component.sessions.length).toBe(2);
    });

    it('Should sort the sessions correctly', () => {
      component.sessions =  [
        { name: 'session 1', level: 'intermediate' },
        { name: 'session 3', level: 'intermediate' },
        { name: 'session 2', level: 'beginner' }
      ] as ISession[];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 3;
      component.ngOnChanges();
      expect(component.visibleSessions[2].name).toBe('session 3');
    });
  });
});

