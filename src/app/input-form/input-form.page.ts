import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.page.html',
  styleUrls: ['./input-form.page.scss'],
})
export class InputFormPage implements OnInit {
  weight: number = 0;
  height: number = 0;
  age: number = 0;
  bmi: number = 0;
  recommendation: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  calculateBMI() {
    const heightInMeters = this.height / 100; // Convert height to meters
    this.bmi = this.weight / (heightInMeters * heightInMeters);

    if (this.bmi < 18.5) {
      this.recommendation = 'Bulk';
    } else if (this.bmi >= 18.5 && this.bmi <= 24.9) {
      this.recommendation = 'Maintain';
    } else if (this.bmi > 24.9 && this.bmi <= 29.9) {
      this.recommendation = 'Cut';
    } else {
      this.recommendation = 'Lose Weight';
    }
  }
}
