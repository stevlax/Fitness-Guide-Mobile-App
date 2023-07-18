import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BulkingDietPage } from './bulking-diet.page';

describe('BulkingDietPage', () => {
  let component: BulkingDietPage;
  let fixture: ComponentFixture<BulkingDietPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BulkingDietPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
