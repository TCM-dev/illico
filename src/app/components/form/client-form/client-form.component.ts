import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Client } from 'src/app/models/client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
  client: Client = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    birthdate: new Date(),
  };

  @Output() onSubmit: EventEmitter<Client> = new EventEmitter();

  @Input() initialValues?: Client;
  @Input() readonly?: boolean;

  constructor() {}

  ngOnInit(): void {
    if (this.initialValues) {
      this.client = this.initialValues;
    }
  }

  submit(ngform: NgForm) {
    // console.log(ngform)
    this.onSubmit.emit(this.client);
  }
}
