import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Client } from 'src/app/models/client';

export const getClientsObservable = (firestore: AngularFirestore) => {
  return firestore
    .collection<Client>('clients')
    .valueChanges({ idField: 'id' });
};

export const getClientObservableById = (
  firestore: AngularFirestore,
  id: string
) => {
  return firestore.doc<Client>('clients/' + id).valueChanges({ idField: 'id' });
};
