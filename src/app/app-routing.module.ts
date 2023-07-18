import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'workoutplan',
    loadChildren: () => import('./workoutplan/workoutplan.module').then( m => m.WorkoutplanPageModule)
  },
  {
    path: 'bulking',
    loadChildren: () => import('./bulking/bulking.module').then( m => m.BulkingPageModule)
  },
  {
    path: 'cutting',
    loadChildren: () => import('./cutting/cutting.module').then( m => m.CuttingPageModule)
  },
  {
    path: 'weightloss',
    loadChildren: () => import('./weightloss/weightloss.module').then( m => m.WeightlossPageModule)
  },
  {
    path: 'input-form',
    loadChildren: () => import('./input-form/input-form.module').then( m => m.InputFormPageModule)
  },
  {
    path: 'recommendations',
    loadChildren: () => import('./recommendations/recommendations.module').then( m => m.RecommendationsPageModule)
  },
  {
    path: 'nutrition',
    loadChildren: () => import('./nutrition/nutrition.module').then( m => m.NutritionPageModule)
  },
  {
    path: 'bulking-diet',
    loadChildren: () => import('./bulking-diet/bulking-diet.module').then( m => m.BulkingDietPageModule)
  },
  {
    path: 'cutting-diet',
    loadChildren: () => import('./cutting-diet/cutting-diet.module').then( m => m.CuttingDietPageModule)
  },
  {
    path: 'weightloss-diet',
    loadChildren: () => import('./weightloss-diet/weightloss-diet.module').then( m => m.WeightlossDietPageModule)
  },
  {
    path: 'timer',
    loadChildren: () => import('./timer/timer.module').then( m => m.TimerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
