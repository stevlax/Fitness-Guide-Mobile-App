import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.page.html',
  styleUrls: ['./recommendations.page.scss'],
})
export class RecommendationsPage {
  bmi: string;
  recommendation: string;

  constructor(private activatedRoute: ActivatedRoute) {
    // Retrieve BMI and recommendation from the input form component
    const state = this.activatedRoute.snapshot.data['state'];
    this.bmi = state?.bmi;
    this.recommendation = state?.recommendation;
  }
}
