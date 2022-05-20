import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientServiceService } from '../patient-service.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css'],
})
export class SearchPatientComponent implements OnInit {
  searchId!: number;
  patient: Patient = new Patient();

  constructor(private patientService: PatientServiceService) {}

  ngOnInit(): void {}

  searchPatient() {
    this.patientService.getPatient(this.searchId).subscribe((data) => {
      this.patient = data;
    });
  }

  onSubmit() {
    this.searchPatient();
  }
}
