import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly uri: string = 'http://localhost:3000/api/user';
  constructor(private http: HttpClient) { }

  public find(): Observable<User[]> {
    return this.http.get<User[]>(`${this.uri}/find`);
  }
  public batchDelete(users: User[]): Observable<any> {
    return this.http.post<any>(`${this.uri}/delete`,users);
  }
  public register(user: User): Observable<User> {
    return this.http.post<User>(`${this.uri}/register`, user);
  }
  public authenticate(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.uri}/authenticate`, { email: email, password: password} );
  }
}
