import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BASE_URL} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders();
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${BASE_URL}/users`);
  }

  getUserByID(id) {
    return this.http.get(`${BASE_URL}/users/id/${id}`);
  }

  getUserByEmail(email) {
    return this.http.get(`${BASE_URL}/users/${email}`);
  }

  getUsersByType(type) {
    return this.http.get(`${BASE_URL}/users/${type}`);
  }

  postUser(user) {
    this.headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post(`${BASE_URL}/users`, user, {headers: this.headers});
  }

  putUser(id, user) {
    return this.http.put(`${BASE_URL}/users/${id}`, user);
  }

  deleteUserById(id) {
    return this.http.delete(`${BASE_URL}/users/${id}`);
  }

  deleteUserByEmail(email) {
    return this.http.delete(`${BASE_URL}/users/${email}`);
  }

}
