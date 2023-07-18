import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BulkingPage } from './bulking.page';

describe('BulkingPage', () => {
  let component: BulkingPage;
  let fixture: ComponentFixture<BulkingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BulkingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
