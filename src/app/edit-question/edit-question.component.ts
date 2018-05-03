import { Component, OnInit } from '@angular/core';
import {Category} from '../entities/category';
import {Question} from '../entities/question';
import {Router} from '@angular/router';
import {QuestionsService} from '../question/questions.service';
import {CategoryService} from '../category/category.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EditQuestionService} from './edit-question.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  form: FormGroup;
  categories: Category[];
  selectedCategory: Category;
  addNewQuestion() {
    this.editQuestionService.addNewQuestion(this.form, this.selectedCategory.id);
  }
  constructor(private questionsService: QuestionsService,
              private categoryService: CategoryService,
              private editQuestionService: EditQuestionService,
              private routes: Router,
              private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(data => {
        this.categories = data as Category[];
        this.selectedCategory = this.categories[0];
      }   );
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
}
