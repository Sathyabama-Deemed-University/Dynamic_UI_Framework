import { NgModule } from '@angular/core';
import { DynamicJMSComponent } from './dynamic-jms.component';
import { ButtonComponent } from './button/button.component';
import { SearchComponent } from './search/search.component';
import { EditableGridComponent } from './grid/grid.component';



@NgModule({
  declarations: [
    DynamicJMSComponent,
    ButtonComponent,
    SearchComponent,
  ],
  imports: [
  ],
  exports: [
    DynamicJMSComponent,
    ButtonComponent,
    SearchComponent,
  ]
})
export class DynamicJMSModule { }
