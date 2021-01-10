import { EmployeeFormModule } from './../../../shared/components/employee-form/employee-form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';


@NgModule({
  declarations: [NewComponent],
  imports: [
    CommonModule,
    NewRoutingModule,
    EmployeeFormModule
  ]
})
export class NewModule { }
