import {Component, OnInit} from '@angular/core';
import {QuestionsService} from './questions.service';
import {Question} from '../entities/question';
import {Router} from '@angular/router';
import {Category} from '../entities/category';
import {CategoryService} from '../category/category.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  categories: Category[];
  questions: Question[];
  selectedCategory: Category;

  constructor(private questionsService: QuestionsService,
              private categoryService: CategoryService) {
  }

  showQuestions(id: number) {
    this.questionsService.getAllQuestions(id)
      .subscribe(data => {
        this.questions = data as Question[];
      });
  }

  deleteById(id: number) {
    if (confirm('Are you sure?')) {
      this.questionsService.removeQuestion(id)
        .subscribe(() => {
          this.showQuestions(this.selectedCategory.id);
        });
      // обработка при подписке!!!!!!!!!!!! или выполнит даже до прихода ответа с сервера
    }
  }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(data => {
        this.categories = data as Category[];
        this.selectedCategory = this.categories[0];
        this.showQuestions(this.selectedCategory.id);
      });
  }

}
