import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialTeamComponent } from './trial-team.component';

describe('TrialTeamComponent', () => {
  let component: TrialTeamComponent;
  let fixture: ComponentFixture<TrialTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
