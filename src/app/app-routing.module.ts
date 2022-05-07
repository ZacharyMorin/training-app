import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
	{
		path: 'workout-tracker',
		loadChildren: () => import('./workout-tracker/workout-tracker.module').then(module => module.WorkoutTrackerModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
