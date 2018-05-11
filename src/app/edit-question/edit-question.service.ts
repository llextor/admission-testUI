import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Question} from '../entities/question';
import {Answer} from '../entities/answer';
import {Router} from '@angular/router';

@Injectable()
export class EditQuestionService {
  answer: Answer = {
    id: null,
    correct: null,
    question: {
      id: null
    },
    answerStr: null
  };

  constructor(private http: HttpClient,
              private routes: Router) {
  }

  addAnswers(idQuestion: number, form: FormGroup) {
    this.answer.correct = true;
    this.answer.answerStr = form.get('trueAnswer').value;
    this.answer.question.id = idQuestion;
    this.http.post('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/answer/', this.answer).subscribe(() => {
      this.answer.correct = false;
      this.answer.answerStr = form.get('wrongAnswer1').value;
      this.http.post('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/answer/', this.answer).subscribe(() => {
        this.answer.answerStr = form.get('wrongAnswer2').value;
        this.http.post('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/answer/', this.answer).subscribe(() => {
          this.answer.answerStr = form.get('wrongAnswer3').value;
          this.http.post('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/answer/', this.answer).subscribe(() => {
            console.log('All answers have created');
            this.routes.navigate(['/questions']);
          }, () => console.log('Error Answer'));
        });
      });
    }, () => {
      console.log('Question is created. Creation answers error');
    });
  }

  addNewQuestion(form: FormGroup, idCategory: number) {
    const question: Question = {
      questionStr: form.get('questionStr').value,
      questionCategory: {
        id: idCategory
      }
    };
    this.http.post('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/question/', question).subscribe((data) => {
      const newQuestion = data as Question;
      this.addAnswers(newQuestion.id, form);
      console.log(idCategory);
    }, () => {
      console.log('Creation question error');
    });
  }
}
