import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Patient } from 'src/app/models/patient';
import { getPatientsObservable } from 'src/app/services/queries/patient.queries';
import { removePatientById } from 'src/app/services/commands/patient.commands';

@Component({
  selector: 'clients-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  loading: boolean = true;
  patients: Patient[] = [];
  firestore: AngularFirestore;

  constructor(firestore: AngularFirestore) {
    this.firestore = firestore;

    getPatientsObservable(firestore).subscribe((patients) => {
      this.patients = patients;
      this.loading = false;
    });
  }

  ngOnInit(): void {}

  remove(id: string) {
    removePatientById(this.firestore, id);
  }
}
