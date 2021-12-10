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
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
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
