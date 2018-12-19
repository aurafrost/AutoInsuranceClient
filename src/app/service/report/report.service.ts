import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Claim } from '../../model/Claim';
import {BASE_URL} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  public getReports() {
    return this.http.get<Claim[]>(`${BASE_URL}/reports`);
  }
  // getReportByID() {}

  public postReport(report){
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post(`${BASE_URL}/reports`, report, {headers: headers});
  }
}
