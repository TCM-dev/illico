import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Patient } from 'src/app/models/patient';

export const removePatientById = (firestore: AngularFirestore, id: string) => {
  firestore.doc('patients/' + id).delete();
};

export const updatePatient = (
  firestore: AngularFirestore,
  patient: Patient
) => {
  return firestore.doc<Patient>('patients/' + patient.id).set(patient);
};

export const createPatient = (
  firestore: AngularFirestore,
  patient: Patient
) => {
  return firestore
    .doc<Patient>('patients/' + firestore.createId())
    .set(patient);
};
