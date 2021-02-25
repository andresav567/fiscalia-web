import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialStageComponent } from './trial-stage.component';

describe('TrialStageComponent', () => {
  let component: TrialStageComponent;
  let fixture: ComponentFixture<TrialStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
