import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Claim } from '../../model/Claim';
import {BASE_URL} from '../../../environments/environment';
import {Report} from '../../model/Report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  public getReports() {
    return this.http.get<Report[]>(`${BASE_URL}/reports`);
  }
  // getReportByID() {}

  public postReport(report) {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post<Report>(`${BASE_URL}/reports`, report, {headers: headers});
  }

  public getReportById(id) {
    return this.http.get<Report>(`${BASE_URL}/reports/${id}`);
  }

  public deleteReportById(id) {
    return this.http.delete<Report>(`${BASE_URL}/reports/${id}`);
  }

  public updateReportById(id, report) {
    return this.http.put<Report>(`${BASE_URL}/reports/${id}`, report);
  }
}
