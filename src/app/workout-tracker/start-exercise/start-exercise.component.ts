import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
	selector: 'app-start-exercise',
	templateUrl: './start-exercise.component.html',
	styleUrls: ['./start-exercise.component.scss']
})
export class StartExerciseComponent implements OnInit {
	@Output() startExercise = new EventEmitter();


	constructor() { }


	ngOnInit(): void {
	}

}
