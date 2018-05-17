import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Answer} from '../entities/answer';
import {Result} from '../entities/result';
import {User} from '../entities/user';
import {l} from '@angular/core/src/render3';

@Injectable()
export class TestService {
  mySet = new Set();
  answers: Answer[];
  selectedAnswers: Answer[] = [];
  iterator = 0;
  resultTest: number = null;
    constructor(private http: HttpClient) {
  }
  finishTest(selectedAnswers: any) {
      const res = Array.from(selectedAnswers) as Answer[];
      this.http.post('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/answer/check/', res)
        .subscribe((data) => {
          this.resultTest = + data.valueOf().toString();
          const resultTests: Result = {
            correctAnswers: + data.valueOf().toString(),
            user: JSON.parse(localStorage.getItem('currentUser')) as User
          };
          this.http.post('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/results/', resultTests).subscribe();
        });
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
  getResult() {
      const currentUser = JSON.parse(localStorage.getItem('currentUser')) as User;
    console.log(currentUser.name);
      this.http.get<Result>('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/results/result/' + currentUser.name + '/')
        .subscribe(data => this.resultTest = data.correctAnswers,
          () => this.resultTest = null);
  }
}


