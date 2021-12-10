import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Client } from 'src/app/models/client';
import ClientCommandService from 'src/app/services/cqrs/commands/client.commands';
import ClientQueriesService from 'src/app/services/cqrs/queries/client.queries';

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  id?: string | null;
  client?: Client;

  constructor(
    private clientCommandService: ClientCommandService,
    private clientQueriesService: ClientQueriesService,
    private route: ActivatedRoute,
    private router: Router,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (!this.id) {
      return;
    }

    this.clientQueriesService
      .getObservableById(this.id)
      .subscribe((client) => (this.client = client));
  }

  handleSubmit(client: Client) {
    this.clientCommandService
      .update(client)
      .then(() => {
        this.router.navigate(['/clients']);
        this.message.success('Patient mis à jour avec succès');
      })
      .catch(() => {
        this.message.error("Une erreur innatendue s'est produite");
      });
  }
}
