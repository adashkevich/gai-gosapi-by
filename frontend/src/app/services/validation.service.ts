import {Injectable} from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';

export const SERVER_ERROR_STR = 'server_error';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      'required': 'Required',
      'email': 'Invalid email address',
      'invalidPassword': `
              Invalid password. Password must be at least 8 characters long,
              must contain at least one uppercase, one lowercase, and one number
            `,
      'minlength': `Minimum length ${validatorValue.requiredLength}`,
      'maxlength': `Maximal length ${validatorValue.requiredLength}`,
      'doesMatchPassword': 'Password does not match',
      'onlyNumericAvailable': 'Only numeric value available',
    };
    if (validatorName.includes(`${SERVER_ERROR_STR}_`)) {
      return validatorValue;
    }
    return config[validatorName];
  }

  // TODO: For email validation need use regexp received from backend
  static emailValidator(control) {
    // RFC 2822 compliant regex
    /* tslint:disable */
    if (control.value && control.value.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      /* tslint:enable */
      return null;
    } else {
      return {'invalidEmailAddress': true};
    }
  }

  static passwordValidator(control) {
    // TODO: get it from state
    const passwordPattern = JSON.parse(localStorage.getItem('core.settings.validators')).password_validator;
    if (control.value && control.value.match(passwordPattern)) {
      return null;
    } else {
      return {'invalidPassword': true};
    }
  }

  static passwordMatchValidator(group: FormGroup) {
    let password;
    let repeatPassword;
    if (group.controls.password1 && group.controls.password2) {
      password = group.controls.password1.value;
      repeatPassword = group.controls.password2.value;
    } else if (group.controls.new_password && group.controls.new_password_confirm) {
      password = group.controls.new_password.value;
      repeatPassword = group.controls.new_password_confirm.value;
    }
    if (!password || !repeatPassword) {
      return null;
    }
    if (repeatPassword.length <= 0) {
      return null;
    }
    if (repeatPassword !== password) {
      return {
        doesMatchPassword: true,
      };
    }
    return null;
  }

  static numericValidator(control) {
    /* tslint:disable */
    if (control.value && control.value.toString().match(
        /[^0-9]/g)) {
      /* tslint:enable */
      return {'onlyNumericAvailable': true};
    } else {
      return null;
    }
  }

  static educationValidator(group: FormGroup) {
    if (group.controls.education_strict.value) {
      group.controls.education.setValidators(Validators.required);
      if (!group.controls.education.value) {
        group.controls.education.setErrors({required: true});
        return null;
      } else {
        group.controls.education.setErrors(null);
        return null;
      }
    } else {
      group.controls.education.clearValidators();
      return null;
    }
  }

}
