import { NgModule } from '@angular/core';

import {
  MAT_DIALOG_DATA,
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

const IMPORTED_MAT_MODULES = [
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatGridListModule,
  MatSelectModule,
  MatStepperModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatMenuModule,
  MatTooltipModule,
  MatTabsModule,
  MatBadgeModule,
  MatPaginatorModule,
  MatRadioModule,
  MatTableModule,
  MatTreeModule,
];


@NgModule({
  imports: IMPORTED_MAT_MODULES,
  exports: IMPORTED_MAT_MODULES,
  providers: [
    {provide: MAT_DIALOG_DATA, useValue: {}},
  ]
})
export class MaterialModule {
}
