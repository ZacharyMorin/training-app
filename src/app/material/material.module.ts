import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';


const MAT_MODULES = [
	MatToolbarModule,
	MatFormFieldModule,
	MatDividerModule,
	MatDatepickerModule,
	MatInputModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCheckboxModule,
	MatSelectModule,
	MatCardModule,
	MatIconModule,
	MatTooltipModule,
	MatListModule

];

@NgModule({
	declarations: [],
	imports: [CommonModule, MAT_MODULES],
	exports: [MAT_MODULES]
})
export class MaterialModule {

}
