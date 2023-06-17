import { Component, Input, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'jms-pop-up',
  template: `
  <div class="container">
    <button 
      class="{{popupClass}}" 
      (click)="openPopup(popupName)"
      >{{openText}}</button>

    <ng-template #popupName>
      <div class="{{popupClass}}">
        <h2>{{popupTitle}}</h2>
        <p>{{popupContent}}</p>
        <button class="xoxo-2" (click)="closePopup(popupName)">{{closeText}}</button>
      </div>
    </ng-template>
  </div>
  `,
  styleUrls: ['pop-up-jms.component.css'
  ]
})
export class PopUpJmsComponent {
  @Input() popupName!:string;
  @Input() popupClass!: string;
  @Input() popupTitle!: string;
  @Input() popupContent!: any;
  @Input() openText!: string;
  @Input() closeText!: string;

  constructor(private dialog: MatDialog){}

  openPopup(templateref: TemplateRef<any>){
    this.dialog.open(templateref);
  }
  closePopup(templateref: TemplateRef<any>){
    this.dialog.closeAll();
  }
}
