import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule, MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule, MatRadioModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { ClaimOfficerPageComponent } from './claim-officer-page/claim-officer-page.component';
import { InspectOfficerPageComponent } from './inspect-officer-page/inspect-officer-page.component';
import { CoverPageComponent } from './cover-page/cover-page.component';
import { CustomerTableComponent } from './admin-page/customer-table/customer-table.component';
import { ClaimOfficerTableComponent } from './admin-page/claim-officer-table/claim-officer-table.component';
import { InspectOfficerTableComponent } from './admin-page/inspect-officer-table/inspect-officer-table.component';
import { ReportTableComponent } from './admin-page/report-table/report-table.component';
import { ClaimTableComponent } from './admin-page/claim-table/claim-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    CustomerPageComponent,
    ClaimOfficerPageComponent,
    InspectOfficerPageComponent,
    CoverPageComponent,
    CustomerTableComponent,
    ClaimOfficerTableComponent,
    InspectOfficerTableComponent,
    ReportTableComponent,
    ClaimTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
