import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectOfficerTableComponent } from './inspect-officer-table.component';

describe('InspectOfficerTableComponent', () => {
  let component: InspectOfficerTableComponent;
  let fixture: ComponentFixture<InspectOfficerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectOfficerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectOfficerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
