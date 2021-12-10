import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Patient } from 'src/app/models/patient';
import PatientQueriesService from 'src/app/services/cqrs/queries/patient.queries';

@Component({
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {
  id?: string | null;
  patient?: Patient;

  constructor(
    private patientQueriesService: PatientQueriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (!this.id) {
      return;
    }

    this.patientQueriesService
      .getObservableById(this.id)
      .subscribe((patient) => (this.patient = patient));
  }
}
