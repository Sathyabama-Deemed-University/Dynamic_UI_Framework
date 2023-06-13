import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EditableGridComponent } from './grid.component';

@NgModule({
  declarations: [
    EditableGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EditableGridComponent
  ]
})
export class EditableGridModule { }
