import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div>
      <div *ngIf="selectedKeg">
        <h3>{{selectedKeg.name}}</h3>
        <hr>
        <h3>Edit Keg</h3>
        <label>Enter Keg Name:</label>
        <input [(ngModel)]="selectedKeg.name">
        <label>Enter Keg Brand:</label>
        <input [(ngModel)]="selectedKeg.brand">
        <label>Enter Keg Price:</label>
        <input [(ngModel)]="selectedKeg.price">
        <label>Enter Keg Alcohol Content:</label>
        <input [(ngModel)]="selectedKeg.alcoholContent">
        <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})


export class EditKegComponent {
  @Input() selectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();
  
  doneButtonClicked(){
    this.doneButtonClickedSender.emit();
  }
}
