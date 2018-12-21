import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Claim } from '../../model/Claim';
import {BASE_URL} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private http: HttpClient) { }

  public getClaims() {
    return this.http.get<Claim[]>(`${BASE_URL}/claims`);
  }

  public getClaimByID(id) {
    return this.http.get(`${BASE_URL}/claims/${id}`);
  }

  public addClaim(userId, claim) {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post<Claim>(`${BASE_URL}/claims/${userId}`, claim, {headers: headers});
  }

  public updateClaim(claim, id) { // not sure how to do this actually. Probably won't work as is.
    // const headers = new HttpHeaders();
    // headers.append('Access-Control-Allow-Origin', '*');
    return this.http.put<Claim>(`${BASE_URL}/claims/${id}`, claim);
  }

  public updateClaimByInspector(claim, id) { // will probably fail too
    return this.http.put<Claim>(`${BASE_URL}/claims/${id}`, claim);
  }
}
