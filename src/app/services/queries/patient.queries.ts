import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Patient } from 'src/app/models/patient';

export const getPatientsObservable = (firestore: AngularFirestore) => {
  return firestore
    .collection<Patient>('patients')
    .valueChanges({ idField: 'id' });
};

export const getPatientObservableById = (
  firestore: AngularFirestore,
  id: string
) => {
  return firestore.doc<Patient>('patients/' + id).valueChanges({ idField: 'id' });
};
