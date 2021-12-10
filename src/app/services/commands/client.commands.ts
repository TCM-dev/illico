import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Client } from 'src/app/models/client';

export const removeClientById = (firestore: AngularFirestore, id: string) => {
  firestore.doc('clients/' + id).delete();
};

export const updateClient = (firestore: AngularFirestore, client: Client) => {
  return firestore.doc<Client>('clients/' + client.id).set(client);
};

export const createClient = (firestore: AngularFirestore, Client: Client) => {
  return firestore.doc<Client>('clients/' + firestore.createId()).set(Client);
};
