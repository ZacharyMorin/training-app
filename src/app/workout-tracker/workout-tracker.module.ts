import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutTrackerContainerComponent } from './workout-tracker-container/workout-tracker-container.component';
import { WorkoutTrackerRoutingModule } from './routing/workout-tracker-routing.module';
import { WorkoutTrackerFormComponent } from './workout-tracker-form/workout-tracker-form.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartExerciseComponent } from './start-exercise/start-exercise.component';
import { ExerciseTypeSelectionComponent } from './exercise-type-selection/exercise-type-selection.component';


@NgModule({
	declarations: [
		WorkoutTrackerContainerComponent,
		WorkoutTrackerFormComponent,
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
