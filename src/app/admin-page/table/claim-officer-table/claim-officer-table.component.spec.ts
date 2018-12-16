import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimOfficerTableComponent } from './claim-officer-table.component';

describe('ClaimOfficerTableComponent', () => {
  let component: ClaimOfficerTableComponent;
  let fixture: ComponentFixture<ClaimOfficerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimOfficerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimOfficerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
