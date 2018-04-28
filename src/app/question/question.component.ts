import { Component, OnInit } from '@angular/core';
import {QuestionsService} from './questions.service';
import {Question} from '../entities/question';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions: Question[];
  selectedQ: Question;
  constructor(private questionsService: QuestionsService,
              private routes: Router) { }

  editQ () {
    console.log('OK');
    this.routes.navigate(['editQ'],
      {queryParams: {'name': this.selectedQ}});
  }
  ngOnInit() {
   /*this.questions = this.questionsService.getAllQuestions();*/
  }

}
