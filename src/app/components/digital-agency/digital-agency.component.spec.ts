import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalAgencyComponent } from './digital-agency.component';

describe('DigitalAgencyComponent', () => {
  let component: DigitalAgencyComponent;
  let fixture: ComponentFixture<DigitalAgencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalAgencyComponent]
    });
    fixture = TestBed.createComponent(DigitalAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
