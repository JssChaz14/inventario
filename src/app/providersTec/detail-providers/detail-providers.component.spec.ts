import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProvidersComponent } from './detail-providers.component';

describe('DetailProvidersComponent', () => {
  let component: DetailProvidersComponent;
  let fixture: ComponentFixture<DetailProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProvidersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
