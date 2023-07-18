import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuttingDietPage } from './cutting-diet.page';

describe('CuttingDietPage', () => {
  let component: CuttingDietPage;
  let fixture: ComponentFixture<CuttingDietPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CuttingDietPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
