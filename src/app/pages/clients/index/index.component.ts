import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

type Patient = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  birthdate: Date;
  // appointments: Appointment[]
};

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
    firestore
      .collection<Patient>('patients')
      .valueChanges({ idField: 'id' })
      .subscribe((patients) => {
        this.patients = patients;
        this.loading = false;
      });
  }

  ngOnInit(): void {}

  remove(id: string) {
    this.firestore.doc('patients/' + id).delete();
  }
}
