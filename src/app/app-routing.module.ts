import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';

const routes: Routes = [
  {path:"doctors",component:DoctorListComponent},
  {path:"create-doctor",component:CreateDoctorComponent},
  {path:"create-patient",component:CreatePatientComponent},
  {path:"doctor-infomation",component:SearchDoctorComponent},
  {path:"search-patient",component:SearchPatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
