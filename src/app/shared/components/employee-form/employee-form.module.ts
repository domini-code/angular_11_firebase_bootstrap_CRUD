import { EmployeeFormComponent } from './employee-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EmployeeFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [EmployeeFormComponent]
})
export class EmployeeFormModule { }
