import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Answer} from '../entities/answer';

@Injectable()
export class TestService {
  responseData: Answer[];
  data1: Answer;

  constructor(private http: HttpClient) {
  }

  getTest() {
    return this.http.get('http://167.99.206.63:8080/admission-test-0.0.1-SNAPSHOT/answer/test/')
      .subscribe(data => {
        this.responseData = data as Answer[];
        for (let i = 0; i < data.toString().length; i++) {
          this.data1 = data[i];

          console.log(JSON.stringify(this.data1));
        }
      });
  }
}


