import { NgModule } from '@angular/core';
import { EditableGridJmsComponent } from './editable-grid-jms.component';
import { CommonModule } from '@angular/common';
import { SimpleSearchpipePipe } from './simple-search.pipe';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditableGridJmsComponent,
    SimpleSearchpipePipe,
  ],
  imports: [CommonModule,
    FormsModule
  ],
  exports: [
    EditableGridJmsComponent
  ]
})
export class EditableGridJmsModule { }
