import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {TestService} from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private testService: TestService) {
  }

  ticks = 0;

  ngOnInit() {
    const timer = Observable.timer(2000, 1000);
    timer.subscribe(t => this.ticks = t);
  }

  getTest() {
    this.testService.getTest();
  }
}
