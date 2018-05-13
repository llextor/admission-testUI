import {Component, OnInit} from '@angular/core';
import {TestService} from './test.service';
import {Question} from '../entities/question';
import {Answer} from '../entities/answer';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  answers: Answer[];
  questions = new Set();
  ticks = 0;

  constructor(public testService: TestService) {
  }

  ngOnInit() {
    this.testService.getTest();
    this.questions = this.testService.mySet;
    const timer = Observable.timer(2000, 1000);
    timer.subscribe(t => this.ticks = t);


  }
}
