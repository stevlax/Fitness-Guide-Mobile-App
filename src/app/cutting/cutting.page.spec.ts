import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuttingPage } from './cutting.page';

describe('CuttingPage', () => {
  let component: CuttingPage;
  let fixture: ComponentFixture<CuttingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CuttingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
