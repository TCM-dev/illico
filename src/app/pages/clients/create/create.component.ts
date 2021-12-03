import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Patient } from 'src/app/models/patient';
import { createPatient } from 'src/app/services/commands/patient.commands';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  firestore: AngularFirestore;

  constructor(firestore: AngularFirestore) {
    this.firestore = firestore;
  }

  ngOnInit(): void {}

  handleSubmit(patient: Patient) {
    createPatient(this.firestore, patient);
  }
}
