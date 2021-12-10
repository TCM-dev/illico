import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { ClientsRoutingModule } from './clients-routing.module';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { ClientFormComponent } from '../../components/form/client-form/client-form.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReadComponent } from './read/read.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  imports: [
    ClientsRoutingModule,
    NzListModule,
    NzSkeletonModule,
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzIconModule,
    NzTableModule,
    NzDividerModule
  ],
  declarations: [
    IndexComponent,
    EditComponent,
    ClientFormComponent,
    CreateComponent,
    ReadComponent,
  ],
  exports: [IndexComponent],
})
export class ClientsModule {}
