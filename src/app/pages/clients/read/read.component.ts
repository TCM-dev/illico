import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { getPatientObservableById } from 'src/app/services/queries/patient.queries';

@Component({
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {
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
}
