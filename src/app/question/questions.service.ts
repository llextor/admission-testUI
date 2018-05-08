import {Injectable} from '@angular/core';
import {QuestionComponent} from './question.component';
import {Question} from '../entities/question';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Answer} from '../entities/answer';


@Injectable()
export class QuestionsService {
  getAllQuestions(id: number): Observable<Question[]> {
    return this.http.get<Question[]>('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/question/category/' + id);
  }

  removeQuestion(id: number): Observable<any> {
    return this.http.delete('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/question/question/' + id + '/');
  }

  /*removeAnswers(id: number) {
    this.http.get('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/answer/question/' + id + '/')
      .subscribe( data => {
        const answers = data as Answer[];
        for (const answer of answers) {
            console.log(answer);
        }
      }
    );
  }*/
  getQuestion(id: number): Observable<Question> {
    return this.http.get<Question>('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/question/question/' + id + '/');
}
  constructor(private http: HttpClient) {
  }

}
