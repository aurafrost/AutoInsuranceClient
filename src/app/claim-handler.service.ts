import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Claim } from "./model/Claim";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClaimHandlerService {

  constructor(private http: HttpClient) { }

  private url="http://localhost:8090/claim"

  public getClaims(){
    return this.http.get<Claim[]>(this.url);
  }

  public addClaim(Claim) {
    return this.http.post<Claim>(this.url + '/add',Claim);
  }

  public updateClaim(Claim,id){ //not sure how to do this actually. Probably won't work as is.
    return this.http.put<Claim>(this.url + '/id/'+id, Claim);
  }

  public updateClaimByInspector(Claim,id){ //will probably fail too
    return this.http.put<Claim>(this.url + '/id/'+id, Claim);
  }
}
