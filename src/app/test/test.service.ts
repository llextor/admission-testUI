import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Answer} from '../entities/answer';
import {Question} from '../entities/question';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TestService {
  mySet = new Set();
  answers: Answer[];
  selectedAnswers: Answer[] = [];
  iterator = 0;
    constructor(private http: HttpClient) {
  }
  getAnswers(question: string): Answer[] {
      this.iterator = 0;
      console.log(this.selectedAnswers);
      for (let i = 0; i < Object.values(this.answers).length; i++) {
        if (this.answers[i].question.questionStr === question) {
          this.selectedAnswers[this.iterator] = this.answers[i];
          this.iterator++;
        }
      }
      return this.selectedAnswers;
  }
  getTest() {
    return this.http.get<Answer[]>('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/answer/test/answers/').subscribe(data => {
      this.answers = data;
      for (let i = 0; i < Object.values(this.answers).length; i++) {
        this.mySet.add(this.answers[i].question.questionStr);
      }
    });
  }
}


