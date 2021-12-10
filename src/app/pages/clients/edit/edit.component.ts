import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client';
import ClientCommandService from 'src/app/services/commands/client.commands';
import ClientQueriesService from 'src/app/services/queries/client.queries';

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
    private route: ActivatedRoute
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
    this.clientCommandService.update(client);
  }
}
