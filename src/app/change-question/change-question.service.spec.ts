import { TestBed, inject } from '@angular/core/testing';

import { ChangeQuestionService } from './change-question.service';

describe('ChangeQuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeQuestionService]
    });
  });

  it('should be created', inject([ChangeQuestionService], (service: ChangeQuestionService) => {
    expect(service).toBeTruthy();
  }));
});
