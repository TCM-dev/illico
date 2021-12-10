import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client';
import { updateClient } from 'src/app/services/commands/client.commands';
import { getClientObservableById } from 'src/app/services/queries/client.queries';

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  firestore: AngularFirestore;
  id?: string | null;
  client?: Client;

  constructor(firestore: AngularFirestore, private route: ActivatedRoute) {
    this.firestore = firestore;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (!this.id) {
      return;
    }

    getClientObservableById(this.firestore, this.id).subscribe(
      (client) => (this.client = client)
    );
  }

  handleSubmit(client: Client) {
    updateClient(this.firestore, client);
  }
}
