import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GaiApiService } from 'src/app/services/gai-api.sevice';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppMessageDialogComponent } from '../components/app-dialog-message';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cities = [
    {name: 'Minsk', id: 1},
    {name: 'Gomel', id: 2},
    {name: 'Vitebsk', id: 3},
    {name: 'Brest', id: 4},
    {name: 'Grodno', id: 5},
    {name: 'Mogilev', id: 6}
  ];
  constructor(private service: GaiApiService,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
                @Inject(MatDialog) private dialog: MatDialog) { }

  gaiForm: FormGroup = new FormGroup({
    reporter_name: new FormControl('', Validators.required),
    reporter_residence: new FormControl('', Validators.required),
    reporter_email: new FormControl('',
      Validators.compose([Validators.email, Validators.required, Validators.maxLength(60)])),
    car_number: new FormControl('', Validators.required),
    place: new FormControl('', Validators.required),
    city_id: new FormControl('', Validators.required),
    photos: new FormControl([])
  });

  ngOnInit() {
  }

  onSubmitAddress() {
    this.service.sendReports(this.gaiForm.value).pipe(
      tap(() => {
        return this.openMessageDialog('Your Form is Succesfully Send');
      }),
      catchError(error => {
        return of(this.openMessageDialog('ERROR'));
      }),
    ).subscribe();
}
onFileChange(event) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      this.gaiForm.get('photos').setValue(files);
    }
  }

  get f() {
  return this.gaiForm['controls'];
}
fileInputText() {
  return this.isFileSelected() ? 'File Was Selected' : 'Upload Files';
}

isFileSelected() {
  return this.gaiForm.controls.photos.value.length > 0;
}

private openMessageDialog(message: string) {
  this.dialog.open(AppMessageDialogComponent, {
    hasBackdrop: false,
    data: {
      message: message
    }
  });
}

}
