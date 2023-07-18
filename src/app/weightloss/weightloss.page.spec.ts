import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeightlossPage } from './weightloss.page';

describe('WeightlossPage', () => {
  let component: WeightlossPage;
  let fixture: ComponentFixture<WeightlossPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WeightlossPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
