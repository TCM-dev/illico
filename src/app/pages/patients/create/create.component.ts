import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Patient } from 'src/app/models/patient';
import PatientCommandService from 'src/app/services/cqrs/commands/patient.commands';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  patientCommandService: PatientCommandService;

  constructor(
    patientCommandService: PatientCommandService,
    private message: NzMessageService,
    private router: Router
  ) {
    this.patientCommandService = patientCommandService;
  }

  ngOnInit(): void {}

  handleSubmit(patient: Patient) {
    this.patientCommandService
      .create(patient)
      .then(() => {
        this.router.navigate(['/patients']);
        this.message.success('Patient crée avec succès');
      })
      .catch(() => {
        this.message.error("Une erreur innatendue s'est produite");
      });
  }
}
