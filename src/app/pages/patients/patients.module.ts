import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { PatientsRoutingModule } from './patients-routing.module';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { PatientFormComponent } from '../../components/form/patient-form/patient-form.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReadComponent } from './read/read.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  imports: [
    PatientsRoutingModule,
    NzListModule,
    NzSkeletonModule,
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzIconModule,
    NzTableModule,
    NzDividerModule,
    NzMessageModule
  ],
  declarations: [
    IndexComponent,
    EditComponent,
    PatientFormComponent,
    CreateComponent,
    ReadComponent,
  ],
  exports: [IndexComponent],
})
export class PatientsModule {}
