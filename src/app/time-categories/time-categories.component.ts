import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-time-categories',
  templateUrl: './time-categories.component.html',
  styleUrls: ['./time-categories.component.css']
})
export class TimeCategoriesComponent implements OnInit {
  @Input() appStatus: any;
  @Output() timerControlEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  clickEvent(timerCategory: string | undefined) {
    this.timerControlEvent.emit(timerCategory);
  }


}
