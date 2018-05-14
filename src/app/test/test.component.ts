import {Component, OnInit, OnDestroy} from '@angular/core';
import {TestService} from './test.service';
import {Question} from '../entities/question';
import {Answer} from '../entities/answer';
import {Router} from '@angular/router';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  questions = new Set();
  private timer: number;

  ngOnInit() {
    this.questions = this.testService.mySet;
    this.timeout();
  }
  constructor(public testService: TestService,
              private routes: Router) {
  }
  timeout() { // data неизвестно как работает
    setTimeout((data) => {
      alert('Time is over, your answers are saved.');
      clearTimeout(data);
      this.routes.navigate(['/result']);
    }, 40000);
  }
  finishTest() {
    this.routes.navigate(['/result']);
  }
}
