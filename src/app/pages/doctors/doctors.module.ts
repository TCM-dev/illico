import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from "./index/index.component";
import { NzListModule } from "ng-zorro-antd/list";
import { NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { DoctorsRoutingModule } from './doctors-routing.module';

@NgModule({
  imports: [DoctorsRoutingModule, NzListModule, NzSkeletonModule, CommonModule],
  declarations: [IndexComponent],
  exports: [IndexComponent]
})
export class DoctorsModule { }
