import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
@Component({
  selector: 'jms-grid',
  template: `
  <ng-container *ngIf="isSearch && searchType==='simple'; else AdvancedSearch">
      <input  type = "text" [(ngModel)] = "searchtextsimple" placeholder="{{inputText}}" />
    </ng-container>
  <table class="{{tableClass}}"> 
      <thead>
        <tr>
          <ng-container
            *ngTemplateOutlet="
              header || defaultTableHeaderTemplate
              context : { $implicit : data }"
          >
          </ng-container>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of data">
          <ng-container
            *ngTemplateOutlet="
              rows || defaultTableRowTemplate
              context:{ $implicit : row }"
          >
          </ng-container>
        </tr>
      </tbody>
    </table>

    <ng-template #defaultTableHeaderTemplate let-data>
      <th *ngFor="let head of data[0] | keyvalue">{{head.key}}</th>
    </ng-template>
 
    <ng-template #defaultTableRowTemplate let-row>
        <td *ngFor="let each of row | keyvalue">{{each.value}}</td>
    </ng-template>

    <ng-template #AdvancedSearch>
      <p>Lmao Advanced Search? Do it</p>
    </ng-template>
  `,
  styleUrls: ['./editable-grid-jms.component.css'
  ]
})
export class EditableGridJmsComponent {
  source : any;

  @Input() data!: any[];
  @Input() searchtextsimple!: string;
  @Input() tableClass!: string;
  @Input() isSearch!: boolean;
  @Input() searchType!: string;
  @Input() inputText!: string;
  @ContentChild('tableHeaders') header!: TemplateRef<any>;
  @ContentChild('tableRows') rows!: TemplateRef<any>;

}