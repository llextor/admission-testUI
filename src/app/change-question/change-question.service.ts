import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Answer} from '../entities/answer';
import {HttpClient} from '@angular/common/http';
import {CategoryService} from '../category/category.service';
import {Category} from '../entities/category';
import {Question} from '../entities/question';
import {QuestionsService} from '../question/questions.service';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Injectable()
export class ChangeQuestionService {
  answer: Answer = {
    id: null,
    correct: null,
    question: {
      id: null
    },
    answerStr: null
  };

  getAnswers(idCategory: number): Observable<Answer[]> {
    return this.http.get<Answer[]>('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/answer/question/' + idCategory + '/');
  }

  getCategories(): Observable<Category[]> {
    return this.categoryService.getCategories();
  }

  getQuestion(id: number): Observable<Question> {
    return this.questionService.getQuestion(id);
  }

  updateAnswers(idQuestion: number, form: FormGroup, answers: Answer[]) {
    this.answer.id = answers[0].id;
    this.answer.correct = true;
    this.answer.answerStr = form.get('trueAnswer').value;
    this.answer.question.id = idQuestion;
    this.http.put('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/answer/answer/' + this.answer.id + '/', this.answer)
      .subscribe(() => {
        this.answer.correct = false;
        this.answer.answerStr = form.get('wrongAnswer1').value;
        this.answer.id = answers[1].id;
        this.http.put('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/answer/answer/' + this.answer.id + '/', this.answer)
          .subscribe(() => {
            this.answer.answerStr = form.get('wrongAnswer2').value;
            this.answer.id = answers[2].id;
            this.http.put('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/answer/answer/' + this.answer.id + '/', this.answer)
              .subscribe(() => {
                this.answer.answerStr = form.get('wrongAnswer3').value;
                this.answer.id = answers[3].id;
                this.http.put('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/answer/answer/' + this.answer.id + '/', this.answer)
                  .subscribe(() => {
                    console.log('All answers have created');
                    this.routes.navigate(['/questions']);
                  }, () => console.log('Error Answer'));
              });
          });
      }, () => {
        console.log('Question is created. Creation answers error');
      });
  }

  updateQuestion(idQ: number, idC: number, form: FormGroup, answers: Answer[]) {
    const question: Question = {
      id: idQ,
      questionStr: form.get('questionStr').value,
      questionCategory: {
        id: idC
      }
    };
    return this.http.put('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/question/question/' + idQ + '/', question)
      .subscribe(() => {
          this.updateAnswers(idQ, form, answers);
        }, () => {
          console.log('Creation question error');
        }
      );
  }

  constructor(private http: HttpClient,
              private routes: Router,
              private categoryService: CategoryService,
              private questionService: QuestionsService) {
  }

}
