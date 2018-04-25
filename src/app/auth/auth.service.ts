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
  currentUser: User = {
    id: null,
    name: '',
    password: '',
    email: '',
    role: {
      id: null,
      name: ''
    }
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
        const str = JSON.stringify(user);
        const strU = str.substr(1, str.length - 2);
        this.currentUser = JSON.parse(strU);
        this.routes.navigate(['pre-test']);
      }, () => {
        console.log('Error LOGIN');
        this.routes.navigate(['/**']);
      });
  }
  signUp(userForm: FormGroup): Observable<User> {
    const newUser: User = {
      id: null,
      name: userForm.get('name').value,
      password: userForm.get('password').value,
      email: userForm.get('email').value,
      role: {
        id: 2,
        name: 'user'
      }
    };
    console.log(newUser);
    return this.http.post<User>('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/users/', newUser, {headers: headers});
  }
  logOut() {
    localStorage.removeItem('currentUser');
    this.routes.navigate(['signin']);
    this.currentUser.role.name = null;
  }
  constructor(private http: HttpClient,
              private routes: Router) { }
}
