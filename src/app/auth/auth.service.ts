import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {User} from '../entities/user';
import {FormBuilder, FormGroup} from '@angular/forms';
const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8', 'Accept': 'application/json'});
@Injectable()
export class AuthService {
  apiURL: 'http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT';
  private url(url: string) {
    return this.apiURL + '/' + url;
  }
  signIn(name: string, password: string): Observable<User> {
    return this.http.post<User>(this.url('user/'), name + '&' + password, {headers: headers}); // found By name and password
  }

  signUp(userForm: FormGroup): Observable<User> {
    const Form = JSON.stringify(userForm.value);
    console.log(Form);
    return this.http.post<User>('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/users/', Form, {headers: headers});
  }
  constructor(private http: HttpClient) { }


}
