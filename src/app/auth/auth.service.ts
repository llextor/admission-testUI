import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {User} from '../entities/user';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Routes, Router} from '@angular/router';
import {Role} from '../entities/role';
const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8', 'Accept': 'application/json'});
@Injectable()
export class AuthService {
  role: Role = {
    type: 'GUEST'
  };
  currentUser: User = {
    role: this.role
  };
  apiURL: 'http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT';
  private url(url: string) {
    return this.apiURL + '/' + url;
  }
  signIn(name: string, password: string) {
    return this.http.get<User>
    ('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/users/user?name=' + name + '&password=' + password).subscribe(
      user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.routes.navigate(['pre-test']);
        this.currentUser.role.type = 'STUDENT';
      }, () => {
        console.log('Error LOGIN');
        this.routes.navigate(['/**']);
      });
  }
  signUp(userForm: FormGroup): Observable<User> {
    const Form = JSON.stringify(userForm.value);
    console.log(Form);
    return this.http.post<User>('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/users/', Form, {headers: headers});
  }
  logOut() {
    localStorage.removeItem('currentUser');
    this.routes.navigate(['signin']);
    this.currentUser.role.type = 'GUEST';
  }
  constructor(private http: HttpClient,
              private routes: Router) { }
}
