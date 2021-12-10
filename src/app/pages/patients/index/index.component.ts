import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import PatientQueriesService from 'src/app/services/cqrs/queries/patient.queries';
import { Patient } from 'src/app/models/patient';
import PatientCommandService from 'src/app/services/cqrs/commands/patient.commands';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'patients-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  loading: boolean = true;
  patients: Patient[] = [];

  constructor(
    private message: NzMessageService,
    private patientCommandService: PatientCommandService,
    patientQueriesService: PatientQueriesService
  ) {
    patientQueriesService.getObservable().subscribe((patients) => {
      this.patients = patients;
      this.loading = false;
    });
  }

  ngOnInit(): void {}

  remove(id: string) {
    this.patientCommandService
      .removeById(id)
      .then(() => {
        this.message.success('Patient supprimé avec succès');
      })
      .catch(() => {
        this.message.error("Une erreur innatendue s'est produite");
      });
  }
}
