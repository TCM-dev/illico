import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { ClientsRoutingModule } from './clients-routing.module';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [ClientsRoutingModule, NzListModule, NzSkeletonModule, CommonModule],
  declarations: [IndexComponent, EditComponent],
  exports: [IndexComponent],
})
export class ClientsModule {}
