import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutTrackerContainerComponent } from './workout-tracker-container/workout-tracker-container.component';
import { WorkoutTrackerRoutingModule } from './routing/workout-tracker-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartExerciseComponent } from './start-exercise/start-exercise.component';
import { ExerciseTypeSelectionComponent } from './exercise-type-selection/exercise-type-selection.component';
import { WorkoutTrackerFormContainerComponent } from './workout-tracker-form-container/workout-tracker-form.component';


@NgModule({
	declarations: [
		WorkoutTrackerContainerComponent,
		WorkoutTrackerFormContainerComponent,
		StartExerciseComponent,
  	ExerciseTypeSelectionComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		WorkoutTrackerRoutingModule
	]
})
export class WorkoutTrackerModule {
}
