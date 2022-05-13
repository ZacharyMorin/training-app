import { Component, Input, OnInit } from '@angular/core';
import { IExerciseSelectionType } from '../../models/exercise.model';


@Component({
  selector: 'app-workout-tracker-form-container',
  templateUrl: './workout-tracker-form-container.component.html',
  styleUrls: ['./workout-tracker-form-container.component.scss']
})
export class WorkoutTrackerFormContainerComponent implements OnInit {
  @Input() exerciseSelectionType: IExerciseSelectionType;

  constructor() { }


  ngOnInit() {
    
  }

}
