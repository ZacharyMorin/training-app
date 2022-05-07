import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutTrackerContainerComponent } from '../workout-tracker-container/workout-tracker-container.component';


const routes: Routes = [
	{
		path: '',
		component: WorkoutTrackerContainerComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class WorkoutTrackerRoutingModule {
}