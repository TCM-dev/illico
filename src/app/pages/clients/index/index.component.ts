import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

type Patient = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  birthdate: Date;
  // appointments: Appointment[]
};

const count = 5;
const fakeDataUrl =
  'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

@Component({
  selector: 'clients-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  item$: Observable<Patient[]>;

  constructor(private http: HttpClient, firestore: Firestore) {
    const patients = collection(firestore, 'patients');
    //@ts-ignore
    this.item$ = collectionData(patients);
  }

  ngOnInit(): void {}
}
