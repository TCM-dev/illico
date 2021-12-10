import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Client } from 'src/app/models/client';
import ClientCommandService from 'src/app/services/commands/client.commands';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  clientCommandService: ClientCommandService;

  constructor(clientCommandService: ClientCommandService) {
    this.clientCommandService = clientCommandService;
  }

  ngOnInit(): void {}

  handleSubmit(client: Client) {
    this.clientCommandService.create(client);
  }
}
