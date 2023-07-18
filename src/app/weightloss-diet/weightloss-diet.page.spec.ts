import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeightlossDietPage } from './weightloss-diet.page';

describe('WeightlossDietPage', () => {
  let component: WeightlossDietPage;
  let fixture: ComponentFixture<WeightlossDietPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WeightlossDietPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
