import { Injectable } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { CqrsService } from '../cqrs.service';

@Injectable({
  providedIn: 'root',
})
export default class PatientQueriesService extends CqrsService {
  getObservable = () => {
    return this.firestore
      .collection<Patient>('patients')
      .valueChanges({ idField: 'id' });
  };

  getObservableById = (id: string) => {
    return this.firestore
      .doc<Patient>('patients/' + id)
      .valueChanges({ idField: 'id' });
  };
}
