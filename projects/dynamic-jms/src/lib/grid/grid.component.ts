import { Component } from '@angular/core';

@Component({
  selector: 'app-editable-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class EditableGridComponent {
  data: any[] = [];

  constructor() {
    // Initialize with some sample data
    this.data = [
      { name: 'John Doe', email: 'john.doe@example.com' },
      { name: 'Jane Smith', email: 'jane.smith@example.com' },
      { name: 'David Johnson', email: 'david.johnson@example.com' }
    ];
  }

  addRow() {
    this.data.push({});
  }

  removeRow(index: number) {
    this.data.splice(index, 1);
  }
}
