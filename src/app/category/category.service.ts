import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../entities/category';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Router, Routes} from '@angular/router';


@Injectable()
export class CategoryService {
  category: Category[];
  constructor(private http: HttpClient,
              private routes: Router) { }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/question_category/');
  }
  removeCategory(id: number) {
    return this.http.delete('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/question_category/question_category/' + id + '/');
}
  addCategory(category: Category) {
    return this.http.post('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/question_category/', category);
  }
  counter(id: number): Observable<number> {
    return this.http.get('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/question/category/' + id)
      .pipe(map(data => Object.values(data).length));
      }
  }


