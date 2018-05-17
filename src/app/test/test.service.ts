import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Answer} from '../entities/answer';
import {Result} from '../entities/result';

@Injectable()
export class TestService {
  mySet = new Set();
  answers: Answer[];
  selectedAnswers: Answer[] = [];
  iterator = 0;
  public result: string = null;
    constructor(private http: HttpClient) {
  }
  finishTest(selectedAnswers: any) {
      const res = Array.from(selectedAnswers) as Answer[];
    const result: Result = {
      id: +localStorage.getItem('currentUser'),
      answers: res
  };
      this.http.post('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/answer/check/', res)
        .subscribe((data) => this.result = data.valueOf().toString());
  }
  getAnswers(question: string): Answer[] {
      this.iterator = 0;
      this.selectedAnswers = [];
      for (let i = 0; i < Object.values(this.answers).length; i++) {
        if (this.answers[i].question.questionStr === question) {
          this.selectedAnswers[this.iterator] = this.answers[i];
          this.iterator++;
        }
      }
      return this.selectedAnswers;
  }
  getTest() {
      this.mySet.clear();
      this.http.get<Answer[]>('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/answer/test/answers/')
        .subscribe(data => {
      this.answers = data;
      for (let i = 0; i < Object.values(this.answers).length; i++) {
        this.mySet.add(this.answers[i].question.questionStr);
      }
    });
  }
  getResult(id: number) {
  }
}


