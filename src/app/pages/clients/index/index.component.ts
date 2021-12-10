import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getClientsObservable } from 'src/app/services/queries/client.queries';
import { Client } from 'src/app/models/client';
import { removeClientById } from 'src/app/services/commands/client.commands';

@Component({
  selector: 'clients-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  loading: boolean = true;
  clients: Client[] = [];
  firestore: AngularFirestore;

  constructor(firestore: AngularFirestore) {
    this.firestore = firestore;

    getClientsObservable(firestore).subscribe((clients) => {
      this.clients = clients;
      this.loading = false;
    });
  }

  ngOnInit(): void {}

  remove(id: string) {
    removeClientById(this.firestore, id);
  }
}
