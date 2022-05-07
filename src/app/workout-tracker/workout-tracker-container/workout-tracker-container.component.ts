import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-workout-tracker-container',
	templateUrl: './workout-tracker-container.component.html',
	styleUrls: ['./workout-tracker-container.component.scss']
})
export class WorkoutTrackerContainerComponent implements OnInit {
	startExercise: boolean = false;


	constructor() {}


	ngOnInit() {
	}

}
