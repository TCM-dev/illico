import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Patient } from 'src/app/models/patient';
import PatientCommandService from 'src/app/services/cqrs/commands/patient.commands';
import PatientQueriesService from 'src/app/services/cqrs/queries/patient.queries';

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  id?: string | null;
  patient?: Patient;

  constructor(
    private patientCommandService: PatientCommandService,
    private patientQueriesService: PatientQueriesService,
    private route: ActivatedRoute,
    private router: Router,
    private message: NzMessageService
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

  handleSubmit(patient: Patient) {
    this.patientCommandService
      .update(patient)
      .then(() => {
        this.router.navigate(['/patients']);
        this.message.success('Patient mis à jour avec succès');
      })
      .catch(() => {
        this.message.error("Une erreur innatendue s'est produite");
      });
  }
}
