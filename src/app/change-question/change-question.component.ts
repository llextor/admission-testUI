import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Question} from '../entities/question';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../entities/category';
import {Answer} from '../entities/answer';
import {ChangeQuestionService} from './change-question.service';

@Component({
  selector: 'app-change-question',
  templateUrl: './change-question.component.html',
  styleUrls: ['./change-question.component.css']
})
export class ChangeQuestionComponent implements OnInit {
  answers: Answer[] = [
    {answerStr: '', correct: false, question: null},
    {answerStr: '', correct: false, question: null},
    {answerStr: '', correct: false, question: null},
    {answerStr: '', correct: false, question: null},
  ];
  categories: Category[];
  selectedCategory: number;
  form: FormGroup;
  question: Question = {};

  constructor(private route: ActivatedRoute,
              private changeQuestionService: ChangeQuestionService,
              private formBuilder: FormBuilder) {
  }

  updateQuestion() {
    this.changeQuestionService.updateQuestion(this.question.id, this.selectedCategory, this.form, this.answers);
  }

  ngOnInit() {
    this.getCategories();
    this.questionDetail();
    this.form = this.formBuilder.group({
      questionStr: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      trueAnswer: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      wrongAnswer1: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      wrongAnswer2: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      wrongAnswer3: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ])
    });
  }

  getCategories() {
    this.changeQuestionService.getCategories().subscribe(category => {
      this.categories = category;
    });
  }

  questionDetail() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.changeQuestionService.getQuestion(id)
      .subscribe(data => {
        this.question = data;
        this.selectedCategory = data.questionCategory.id;
        this.changeQuestionService.getAnswers(this.question.id)
          .subscribe(answers => {
            for (let i = 0; i < answers.length; i++) {
              if (answers[i].correct) {
                const temp = answers[0];
                answers[0] = answers[i];
                answers[i] = temp;
              }
              this.answers = answers;
            }
          });
      });
  }
}
