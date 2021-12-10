import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client';
import ClientQueriesService from 'src/app/services/queries/client.queries';

@Component({
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {
  id?: string | null;
  client?: Client;

  constructor(
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
}
