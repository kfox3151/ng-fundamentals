import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { SessionListComponent } from './session-list.component';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';
import { By } from '@angular/platform-browser';
import { UpvoteComponent } from './upvote.component';
import { DurationPipe } from '../shared/duration.pipe';
import { CollapsibleWellComponent } from '../../common/collapsible-well.component';

describe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEL: DebugElement;

    beforeEach(async(() => {
        let mockAuthService = {
            isAuthenticated: () => true,
            currentUser: {userName: 'joe'}
        };
        let mockVoterService = {
            userHasVoted: () => true
        };

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent,
                UpvoteComponent,
                DurationPipe,
                CollapsibleWellComponent
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ],
            schemas: []
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEL = fixture.debugElement;
        element = fixture.nativeElement;
    });

    describe('Initial display', () => {

        it('Should have the correct session title', () => {
            component.sessions = [{ id: 3, name: 'Session 1',
                presenter: 'joe', duration: 1, level: 'beginner', abstract: 'abstract', voters: ['john', 'bob']}];
                component.filterBy = 'all';
                component.sortBy = 'name';
                component.eventId = 4;

                component.ngOnChanges();
                fixture.detectChanges();

                // Raw dom query selector
                expect(element.querySelector('[well-title]').textContent).toContain('Session 1');

                // Different way of doing the same thing.
                // Angular utility query with the By function
                expect(debugEL.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
        });
    });
})
