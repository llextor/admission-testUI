import { Component, OnInit } from '@angular/core';
import {TestService} from '../test/test.service';
import {Result} from '../entities/result';

@Component({
  selector: 'app-otchet',
  templateUrl: './otchet.component.html',
  styleUrls: ['./otchet.component.css']
})
export class OtchetComponent implements OnInit {
  results: Result[] = [];
  constructor(public testService: TestService) { }

  ngOnInit() {
    this.testService.getAllResults().subscribe(data => this.results = data as Result[]);
  }

}
