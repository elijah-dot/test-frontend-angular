import { Component, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-timer-controls',
  templateUrl: './timer-controls.component.html',
  styleUrls: ['./timer-controls.component.css']
})
export class TimerControlsComponent implements OnInit {
  @Output() timerControlEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  clickEvent(action: string | undefined) {
    this.timerControlEvent.emit(action);
  }

}
