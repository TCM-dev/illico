import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss'],
})
export class PatientFormComponent implements OnInit {
  patient: Patient = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    birthdate: new Date(),
  };

  @Output() onSubmit: EventEmitter<Patient> = new EventEmitter();

  @Input() initialValues?: Patient;
  @Input() readonly?: boolean;

  constructor() {}

  ngOnInit(): void {
    if (this.initialValues) {
      this.patient = this.initialValues;
    }
  }

  submit(ngform: NgForm) {
    // console.log(ngform)
    this.onSubmit.emit(this.patient);
  }
}
