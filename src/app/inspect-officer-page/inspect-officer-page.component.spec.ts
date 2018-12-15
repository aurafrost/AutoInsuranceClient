import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectOfficerPageComponent } from './inspect-officer-page.component';

describe('InspectOfficerPageComponent', () => {
  let component: InspectOfficerPageComponent;
  let fixture: ComponentFixture<InspectOfficerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectOfficerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectOfficerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
