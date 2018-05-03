import { TestBed, inject } from '@angular/core/testing';

import { EditQuestionService } from './edit-question.service';

describe('EditQuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditQuestionService]
    });
  });

  it('should be created', inject([EditQuestionService], (service: EditQuestionService) => {
    expect(service).toBeTruthy();
  }));
});
