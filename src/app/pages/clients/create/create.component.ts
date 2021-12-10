import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Client } from 'src/app/models/client';
import ClientCommandService from 'src/app/services/cqrs/commands/client.commands';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  clientCommandService: ClientCommandService;

  constructor(
    clientCommandService: ClientCommandService,
    private message: NzMessageService,
    private router: Router
  ) {
    this.clientCommandService = clientCommandService;
  }

  ngOnInit(): void {}

  handleSubmit(client: Client) {
    this.clientCommandService
      .create(client)
      .then(() => {
        this.router.navigate(['/clients']);
        this.message.success('Patient crée avec succès');
      })
      .catch(() => {
        this.message.error("Une erreur innatendue s'est produite");
      });
  }
}
