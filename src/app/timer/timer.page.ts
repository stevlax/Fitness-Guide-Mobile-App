import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: 'timer.page.html',
  styleUrls: ['timer.page.scss'],
})
export class TimerPage implements OnDestroy {
  workDuration: number = 0;
  workDurationUnit: string = 'seconds';
  numSets: number = 0;
  restTime: number = 0;
  restTimeUnit: string = 'seconds';
  presetName: string = '';
  presets: any[] = []; // Add this line to declare the presets array

  savePreset() {
    // Save the preset with the entered settings
    const preset = {
      workDuration: this.workDuration,
      workDurationUnit: this.workDurationUnit,
      numSets: this.numSets,
      restTime: this.restTime,
      restTimeUnit: this.restTimeUnit,
      presetName: this.presetName,
    };

    // Add the preset to the array
    this.presets.push(preset);

    // Store the presets in local storage or any other storage mechanism
    // For example:
    localStorage.setItem('workoutPresets', JSON.stringify(this.presets));
    console.log('Preset saved:', preset);
  }

  timer: any; // Timer variable
  currentSet: number = 1; // Current set counter
  timeRemaining: number = 0; // Time remaining for the current interval
  isTimerRunning: boolean = false; // Indicates if the timer is running or not

  ngOnDestroy() {
    this.stopTimer();
  }

  startTimer() {
    if (this.isTimerRunning) {
      return;
    }

    this.currentSet = 1;
    this.startInterval();
  }

  pauseTimer() {
    this.stopTimer();
  }

  resetTimer() {
    this.stopTimer();
    this.currentSet = 1;
    this.timeRemaining = 0;
  }

  private startInterval() {
    const workDurationInSeconds = this.convertToSeconds(this.workDuration, this.workDurationUnit);
    const restTimeInSeconds = this.convertToSeconds(this.restTime, this.restTimeUnit);

    this.isTimerRunning = true;
    this.timeRemaining = workDurationInSeconds;

    this.timer = setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
      } else {
        this.currentSet++;
        if (this.currentSet > this.numSets) {
          this.stopTimer();
          return;
        }
        if (this.currentSet % 2 === 0) {
          this.timeRemaining = restTimeInSeconds;
        } else {
          this.timeRemaining = workDurationInSeconds;
        }
      }
    }, 1000);
  }

  private stopTimer() {
    clearInterval(this.timer);
    this.isTimerRunning = false;
  }

  private convertToSeconds(value: number, unit: string): number {
    if (unit === 'minutes') {
      return value * 60;
    }
    return value;
  }
}
