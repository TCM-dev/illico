import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'show/:id', component: ReadComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule {}
