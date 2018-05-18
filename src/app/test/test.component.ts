import {Component, OnInit} from '@angular/core';
import {TestService} from './test.service';
import {Answer} from '../entities/answer';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  questions = new Set();
  selectedAnswers: Answer[];
  maps = new Map();
  timeVar: any;
  ticks: number;
  ngOnInit() {
    this.questions = this.testService.mySet;
    const timer = Observable.timer(0, 1000);
    timer.subscribe(t => this.ticks = t);
    this.timeout();
  }
  constructor(public testService: TestService,
              private routes: Router) {
  }
  timeout() { // проблема постоянных запросо getAnswers
      this.timeVar = setTimeout( data => {
        alert('Time is over, your answers are saved.');
        this.finishTest();
       }, 600000);
  }
  finishTest() {
    clearTimeout(this.timeVar);
    this.testService.finishTest(this.maps.values());
    this.routes.navigate(['/pre-test']);
  }
  addAnswer(selectedAnswer: Answer) {
    this.maps.set(selectedAnswer.question.id, selectedAnswer);
  }
}
