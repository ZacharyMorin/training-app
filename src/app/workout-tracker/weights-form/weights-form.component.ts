import { Component, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IWeights } from '../../models/exercise.model';

@Component({
  selector: 'app-weights-form',
  templateUrl: './weights-form.component.html',
  styleUrls: ['./weights-form.component.scss']
})
export class WeightsFormComponent implements OnInit, OnDestroy {

  @Output() weightExercise = new EventEmitter<IWeights>();

  weightsForm: FormGroup;

  formSub = new Subscription();

  constructor() {}

  ngOnInit() {
    this.weightsForm = new FormGroup({
      name: new FormControl(''),
      weight: new FormControl(''),
      sets: new FormControl(''),
      reps: new FormControl('')
    });


    this.formSub = this.weightsForm.valueChanges.subscribe((formVal) => {
      console.log(formVal);
    })
  }


  ngOnDestroy() {
    this.formSub.unsubscribe();
  }

}