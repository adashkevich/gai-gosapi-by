import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';


export interface FormError {
  error: string;
  params: any;
}


@Component({
  selector: 'app-control-messages',
  template: `
    <mat-error *ngIf="errorMessage !== null">{{errorMessage}}</mat-error>
  `,
  styles: [],
})
export class ControlMessagesComponent {
  @Input() public form: FormGroup;
  @Input() public control: FormControl;
  @Input() public submitted: boolean;

  // errors <--
  @Input() errors: any;


  // errors -->

  constructor() {
  }

  get errorMessage() {
    if (this.control) {
      for (const propertyName in this.control.errors) {
        if (this.control.touched && this.control.errors.hasOwnProperty(propertyName)) {
          return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
        }
      }
    }
    return null;
  }
}
