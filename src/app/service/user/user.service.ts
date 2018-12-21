import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BASE_URL} from '../../../environments/environment';
import {User} from '../../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(`${BASE_URL}/users`);
  }

  getUserByID(id) {
    return this.http.get<User>(`${BASE_URL}/users/id/${id}`);
  }

  getUserByClaim(claim) {
    return this.http.post<User>(`${BASE_URL}/users/claim`, claim);
  }

  getUserByIdAndType(type, id) {
    return this.http.get<User>(`${BASE_URL}/users/${type}/${id}`);
  }

  getUserByEmail(email) {
    return this.http.get<User>(`${BASE_URL}/users/email/${email}`);
  }

  getUsersByType(type) {
    return this.http.get<User>(`${BASE_URL}/users/${type}`);
  }

  postUser(user) {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post<User>(`${BASE_URL}/users`, user, {headers: headers});
  }

  putUser(id, user) {
    return this.http.put<User>(`${BASE_URL}/users/${id}`, user);
  }

  deleteUserById(id) {
    return this.http.delete<User>(`${BASE_URL}/users/id/${id}`);
  }

  deleteUserByEmail(email) {
    return this.http.delete<User>(`${BASE_URL}/users/email/${email}`);
  }

  updateUserStatus(user) {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    if (user.status === 'Active') {
      user.status = 'Deactive';
      return this.http.put<User>(`${BASE_URL}/users/${user.userId}/status`, user, {headers: headers});
    }
    if (user.status === 'Deactive') {
      user.status = 'Active';
      return this.http.put<User>(`${BASE_URL}/users/${user.userId}/status`, user, {headers: headers});
    }
  }
}
