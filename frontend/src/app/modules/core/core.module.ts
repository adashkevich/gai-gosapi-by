import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { SidenavComponent } from './components/sidenav.component';
import { NavItemComponent } from './components/nav-item.component';
import { MaterialModule } from '../material';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout.component';
import { ToolbarComponent } from './components/toolbar.component';
import { MaterialFileUploadComponent } from './components/material-file-upload/material-file-upload.component';
import { ControlMessagesComponent } from './components/control-messages.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GaiApiService } from 'src/app/services/gai-api.sevice';
import { ApiService } from 'src/app/services/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppMessageDialogComponent } from './components/app-dialog-message';
import { StatisticComponent } from './statistic/statistic.component';


export const CORE_COMPONENTS = [
  SidenavComponent, NavItemComponent,
  AboutComponent, MainComponent, LayoutComponent, ToolbarComponent, MaterialFileUploadComponent, ControlMessagesComponent,
  AppMessageDialogComponent, StatisticComponent
];

@NgModule({
  declarations: CORE_COMPONENTS,
  exports: CORE_COMPONENTS,
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  providers: [
    GaiApiService,
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
  ],
  entryComponents: [AppMessageDialogComponent]
})
export class CoreModule { }
