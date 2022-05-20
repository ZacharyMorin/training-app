import { Component, Input, OnInit } from '@angular/core';


@Component({
	selector: 'app-exercise-list',
	templateUrl: './exercise-list.component.html',
	styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit {
	@Input() exerciseList = [];
	addExercise


	constructor() {}


	ngOnInit(): void {
	}

}