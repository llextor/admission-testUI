import { Injectable } from '@angular/core';
import {QuestionComponent} from './question.component';
import {Question} from '../entities/question';
import {httpFactory} from '@angular/http/src/http_module';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class QuestionsService {
  questions: Question [];

/*  getAllQuestions(): Question[] {
     this.http.get('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/question/').subscribe(data => {
       this.questions = data as Question[];
       console.log(this.questions);
       const  str = JSON.stringify(data);
       console.log(str);*!/
     });
    return this.questions;
  }*/
  constructor(private http: HttpClient) { }

}
