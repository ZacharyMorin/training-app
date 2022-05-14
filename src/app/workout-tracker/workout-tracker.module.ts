import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutTrackerContainerComponent } from './workout-tracker-container/workout-tracker-container.component';
import { WorkoutTrackerRoutingModule } from './routing/workout-tracker-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartExerciseComponent } from './start-exercise/start-exercise.component';
import { ExerciseTypeSelectionComponent } from './exercise-type-selection/exercise-type-selection.component';
import { WorkoutTrackerFormContainerComponent } from './workout-tracker-form-container/workout-tracker-form-container.component';
import { WeightsFormComponent } from './weights-form/weights-form.component';
import { CardioFormComponent } from './cardio-form/cardio-form.component';
import { HiitFormComponent } from './hiit-form/hiit-form.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';


@NgModule({
	declarations: [
		WorkoutTrackerContainerComponent,
		WorkoutTrackerFormContainerComponent,
		StartExerciseComponent,
		ExerciseTypeSelectionComponent,
		WeightsFormComponent,
		CardioFormComponent,
		HiitFormComponent,
		ExerciseListComponent
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
