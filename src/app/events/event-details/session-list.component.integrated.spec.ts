import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { SessionListComponent } from './session-list.component';
import { DebugElement, Component } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';
import { DurationPipe } from 'src/app/shared';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SessionListComponent', () => {
  // tslint:disable-next-line: one-variable-per-declaration
  let fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEl: DebugElement;

  beforeEach(async(() => {
    const mockAuthService = { isAuthenticated: () => true,
    currentUser: {userName: 'Joe'}};
    const mockVoterService = {
      userHasVoted: () => true
    };

    TestBed.configureTestingModule({
      imports: [],
      declarations: [SessionListComponent, DurationPipe ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('intial display', () => {
    it('Should have the correct session title', () => {
      component.sessions = [
        {
          id: 3,
          name: 'Session 1',
          presenter: 'krishna',
          duration: 1,
          level: 'beginner',
          abstract: 'abstract',
          voters: ['john', 'bob']
        }
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;

      component.ngOnChanges();
      fixture.detectChanges();

      // expect(element.querySelector('[well-title]').textContent).toContain(
      //   'Session 1'
      // );
      expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain(
        'Session 1'
      );
    });
  });
});
