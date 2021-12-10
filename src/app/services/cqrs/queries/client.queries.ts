import { Injectable } from '@angular/core';
import { Client } from 'src/app/models/client';
import { CqrsService } from '../cqrs.service';

@Injectable({
  providedIn: 'root',
})
export default class ClientQueriesService extends CqrsService {
  getObservable = () => {
    return this.firestore
      .collection<Client>('clients')
      .valueChanges({ idField: 'id' });
  };

  getObservableById = (id: string) => {
    return this.firestore
      .doc<Client>('clients/' + id)
      .valueChanges({ idField: 'id' });
  };
}
