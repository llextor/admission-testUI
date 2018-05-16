import { Component, OnInit } from '@angular/core';
import {TestService} from '../test/test.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(public testService: TestService) { }

  ngOnInit() {
  }

}
