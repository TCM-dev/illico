import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Client } from 'src/app/models/client';
import { CqrsService } from '../cqrs/cqrs.service';

@Injectable({
  providedIn: 'root',
})
export default class ClientCommandService extends CqrsService {
  removeById = (id: string) => {
    this.firestore.doc('clients/' + id).delete();
  };

  update = (client: Client) => {
    return this.firestore.doc<Client>('clients/' + client.id).set(client);
  };

  create = (Client: Client) => {
    return this.firestore
      .doc<Client>('clients/' + this.firestore.createId())
      .set(Client);
  };
}
