import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase/compat';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/models/patient';
import { updatePatient } from 'src/app/services/commands/patient.commands';
import { getPatientObservableById } from 'src/app/services/queries/patient.queries';

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  firestore: AngularFirestore;
  id?: string | null;
  patient?: Patient;

  constructor(firestore: AngularFirestore, private route: ActivatedRoute) {
    this.firestore = firestore;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (!this.id) {
      return;
    }

    getPatientObservableById(this.firestore, this.id).subscribe(
      (patient) => (this.patient = patient)
    );
  }

  handleSubmit(patient: Patient) {
    updatePatient(this.firestore, patient);
  }
}
