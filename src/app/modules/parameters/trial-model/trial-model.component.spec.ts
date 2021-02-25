import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialModelComponent } from './trial-model.component';

describe('TrialModelComponent', () => {
  let component: TrialModelComponent;
  let fixture: ComponentFixture<TrialModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
