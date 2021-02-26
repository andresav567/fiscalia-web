import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcityComponent } from './modalcity.component';

describe('ModalcityComponent', () => {
  let component: ModalcityComponent;
  let fixture: ComponentFixture<ModalcityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalcityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
