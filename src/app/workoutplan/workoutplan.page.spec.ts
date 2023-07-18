import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutplanPage } from './workoutplan.page';

describe('WorkoutplanPage', () => {
  let component: WorkoutplanPage;
  let fixture: ComponentFixture<WorkoutplanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WorkoutplanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
