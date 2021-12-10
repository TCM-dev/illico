import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import ClientQueriesService from 'src/app/services/cqrs/queries/client.queries';
import { Client } from 'src/app/models/client';
import ClientCommandService from 'src/app/services/cqrs/commands/client.commands';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'clients-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  loading: boolean = true;
  clients: Client[] = [];

  constructor(
    private message: NzMessageService,
    private clientCommandService: ClientCommandService,
    clientQueriesService: ClientQueriesService
  ) {
    clientQueriesService.getObservable().subscribe((clients) => {
      this.clients = clients;
      this.loading = false;
    });
  }

  ngOnInit(): void {}

  remove(id: string) {
    this.clientCommandService
      .removeById(id)
      .then(() => {
        this.message.success('Patient supprimé avec succès');
      })
      .catch(() => {
        this.message.error("Une erreur innatendue s'est produite");
      });
  }
}
