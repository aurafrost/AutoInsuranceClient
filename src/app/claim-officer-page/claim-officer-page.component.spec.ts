import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimOfficerPageComponent } from './claim-officer-page.component';

describe('ClaimOfficerPageComponent', () => {
  let component: ClaimOfficerPageComponent;
  let fixture: ComponentFixture<ClaimOfficerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimOfficerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimOfficerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
