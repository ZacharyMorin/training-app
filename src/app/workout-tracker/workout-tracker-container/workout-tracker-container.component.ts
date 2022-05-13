import { Component, OnInit } from '@angular/core';
import { IExerciseSelectionType } from '../../models/exercise.model';


@Component({
	selector: 'app-workout-tracker-container',
	templateUrl: './workout-tracker-container.component.html',
	styleUrls: ['./workout-tracker-container.component.scss']
})
export class WorkoutTrackerContainerComponent implements OnInit {
	startExercise: boolean = false;
	selectedExerciseType: IExerciseSelectionType = null;


	constructor() {}


	ngOnInit() {
	}

	exerciseTypeSelection(selection) {
		this.selectedExerciseType = selection;
	}

}
