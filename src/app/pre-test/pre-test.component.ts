import { Component, OnInit } from '@angular/core';
import {TestService} from '../test/test.service';

@Component({
  selector: 'app-pre-test',
  templateUrl: './pre-test.component.html',
  styleUrls: ['./pre-test.component.css']
})
export class PreTestComponent implements OnInit {



  getTest() {
    this.testService.getTest();
  }
  constructor(public testService: TestService) { }

  ngOnInit() {
    this.testService.getResult();
  }

}
