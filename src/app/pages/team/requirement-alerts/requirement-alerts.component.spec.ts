import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementAlertsComponent } from './requirement-alerts.component';

describe('RequirementAlertsComponent', () => {
  let component: RequirementAlertsComponent;
  let fixture: ComponentFixture<RequirementAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequirementAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
