import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Patient } from 'src/app/models/patient';
import { CqrsService } from '../cqrs.service';

@Injectable({
  providedIn: 'root',
})
export default class PatientCommandService extends CqrsService {
  removeById = (id: string) => {
    return this.firestore.doc('patients/' + id).delete();
  };

  update = (patient: Patient) => {
    return this.firestore.doc<Patient>('patients/' + patient.id).set(patient);
  };

  create = (Patient: Patient) => {
    return this.firestore
      .doc<Patient>('patients/' + this.firestore.createId())
      .set(Patient);
  };
}
