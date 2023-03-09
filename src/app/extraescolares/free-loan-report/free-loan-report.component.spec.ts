import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeLoanReportComponent } from './free-loan-report.component';

describe('FreeLoanReportComponent', () => {
  let component: FreeLoanReportComponent;
  let fixture: ComponentFixture<FreeLoanReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeLoanReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeLoanReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
