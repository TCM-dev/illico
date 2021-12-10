import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'login', component: LoginComponent },
  {
    path: 'patients',
    loadChildren: () =>
      import('./pages/patients/patients.module').then((m) => m.PatientsModule),
  },
  {
    path: 'doctors',
    loadChildren: () =>
      import('./pages/doctors/doctors.module').then((m) => m.DoctorsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
