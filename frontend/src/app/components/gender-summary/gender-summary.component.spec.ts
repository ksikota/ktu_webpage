import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderSummaryComponent } from './gender-summary.component';

describe('GenderSummaryComponent', () => {
  let component: GenderSummaryComponent;
  let fixture: ComponentFixture<GenderSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenderSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
