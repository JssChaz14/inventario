import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeLoanComponent } from './free-loan.component';

describe('FreeLoanComponent', () => {
  let component: FreeLoanComponent;
  let fixture: ComponentFixture<FreeLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeLoanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
