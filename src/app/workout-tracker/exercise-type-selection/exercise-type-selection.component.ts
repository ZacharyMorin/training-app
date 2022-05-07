import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-exercise-type-selection',
	templateUrl: './exercise-type-selection.component.html',
	styleUrls: ['./exercise-type-selection.component.scss']
})
export class ExerciseTypeSelectionComponent implements OnInit {
	exerciseTypeSelectionList = [
		{
			id: 1,
			type: 'Weights'
		},
		{
			id: 2,
			type: 'Cardio'
		},
		{
			id: 3,
			type: 'Hiit'
		}
	];


	constructor() { }


	ngOnInit() {
		console.log(this.exerciseTypeSelectionList);
	}

}
