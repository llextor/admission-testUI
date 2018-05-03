import { Injectable } from '@angular/core';
import {QuestionComponent} from './question.component';
import {Question} from '../entities/question';
import {httpFactory} from '@angular/http/src/http_module';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class QuestionsService {
 getAllQuestions(id: number): Observable<Question[]> {
     return this.http.get<Question[]>('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/question/category/' + id);
  }
  removeQuestion(id: number) {
   this.http.delete('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/question/question/' + id + '/')
     .subscribe(() => console.log('remove ques'));
  }
  constructor(private http: HttpClient) { }

}
