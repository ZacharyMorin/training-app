import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weights-form',
  templateUrl: './weights-form.component.html',
  styleUrls: ['./weights-form.component.scss']
})
export class WeightsFormComponent implements OnInit {
  weightsForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.weightsForm = new FormGroup({
      name: new FormControl(''),
      weight: new FormControl(''),
      sets: new FormControl(''),
      reps: new FormControl('')
    });
  }

}