import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <h1>New Keg</h1>
  <div>
    <label>Enter Keg Name:</label>
    <input #newName>
  </div>
  <div>
    <label>Enter Keg Brand:</label>
    <input #newBrand>
  </div>
  <div>
    <label>Enter Keg Price:</label>
    <input #newPrice>
  </div>
  <div>
    <label>Enter Keg Alcohol Content:</label>
    <input #newAlcoholContent>
  </div>
  <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value);newName.value='';">Add</button>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcoholContent: number){
    var newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent);
    this.newKegSender.emit(newKegToAdd);
  }
}
