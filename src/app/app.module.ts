import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

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
  MatSelectModule, MatSliderModule, MatSlideToggleModule, MatTableModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { ClaimOfficerPageComponent } from './claim-officer-page/claim-officer-page.component';
import { InspectOfficerPageComponent } from './inspect-officer-page/inspect-officer-page.component';
import { CoverPageComponent } from './cover-page/cover-page.component';
import { CustomerTableComponent } from './admin-page/table/customer-table/customer-table.component';
import { ClaimOfficerTableComponent } from './admin-page/table/claim-officer-table/claim-officer-table.component';
import { InspectOfficerTableComponent } from './admin-page/table/inspect-officer-table/inspect-officer-table.component';
import { ReportTableComponent } from './admin-page/table/report-table/report-table.component';
import { ClaimTableComponent } from './admin-page/table/claim-table/claim-table.component';
import {UserService} from './service/user/user.service';
import { ClaimService } from './service/claim/claim.service';
import { UserDialogComponent } from './admin-page/dialog/user-dialog/user-dialog.component';
import { MobileMenuComponent } from './admin-page/menu/mobile-menu/mobile-menu.component';
import { ClaimComponent } from './customer-page/claim/claim.component';
import { ClaimListComponent } from './customer-page/claim-list/claim-list.component';
import { DetailsDialogComponent } from './customer-page/claim-list/details-dialog/details-dialog.component';
import { ReportDialogComponent } from './claim-officer-page/report-dialog/report-dialog.component';

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
    ClaimTableComponent,
    UserDialogComponent,
    MobileMenuComponent,
    ClaimComponent,
    ClaimListComponent,
    DetailsDialogComponent,
    ReportDialogComponent
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
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTabsModule
  ],
  providers: [UserService, ClaimService],
  bootstrap: [AppComponent],
  entryComponents: [UserDialogComponent, DetailsDialogComponent, ReportDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
