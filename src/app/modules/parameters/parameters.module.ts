import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from './city/city.component';
import { ProvinceComponent } from './province/province.component';
import { CountryComponent } from './country/country.component';
import { TrialComponent } from './trial/trial.component';
import { UserComponent } from './user/user.component';
import { AreasComponent } from './areas/areas.component';
import { CourtComponent } from './court/court.component';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { JobComponent } from './job/job.component';
import { NoteComponent } from './note/note.component';
import { ProcessTypeComponent } from './process-type/process-type.component';
import { StageComponent } from './stage/stage.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { TrialModelComponent } from './trial-model/trial-model.component';
import { TrialStageComponent } from './trial-stage/trial-stage.component';
import { TrialTeamComponent } from './trial-team/trial-team.component';
import { ActivityComponent } from './activity/activity.component';



@NgModule({
  declarations: [
    CityComponent,
    ProvinceComponent,
    CountryComponent,
    TrialComponent,
    UserComponent,
    AreasComponent,
    CourtComponent,
    CompanyComponent,
    EmployeeComponent,
    JobComponent,
    NoteComponent,
    ProcessTypeComponent,
    StageComponent,
    UserRoleComponent,
    TrialModelComponent,
    TrialStageComponent,
    TrialTeamComponent,
    ActivityComponent],

  imports: [
    CommonModule
  ],
  exports: [
    CityComponent,
    ProvinceComponent,
    CountryComponent,
    TrialComponent,
    UserComponent,
    AreasComponent,
    CourtComponent,
    CompanyComponent,
    EmployeeComponent,
    JobComponent,
    NoteComponent,
    ProcessTypeComponent,
    StageComponent,
    UserRoleComponent,
    TrialModelComponent,
    TrialStageComponent,
    TrialTeamComponent,
    ActivityComponent,
  ]
})

export class ParametersModule { }
