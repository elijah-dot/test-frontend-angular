import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pomodoro-app',
  templateUrl: './pomodoro-app.component.html',
  styleUrls: ['./pomodoro-app.component.css']
})
export class PomodoroAppComponent implements OnInit {
  public timerControlAction: any;
  public appStatus = {takenPomodoroNum: 0, takenShortBreakNum: 0, takenLongBreakNum: 0};

  constructor() { }

  ngOnInit(): void {
  }

  receiveAction($event: any) {
    this.timerControlAction = $event;
  }

  timerCompletedEvent($event: string) {
    if ($event === 'pomodoro') {
      this.appStatus.takenPomodoroNum++;
    } else if ($event === 'short-break') {
      this.appStatus.takenShortBreakNum++;
    } else if ($event === 'long-break') {
      this.appStatus.takenLongBreakNum++;
    }
  }

}
