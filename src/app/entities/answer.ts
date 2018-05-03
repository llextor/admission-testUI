import {Question} from './question';

export interface Answer {
  id?: number;
  answerStr: string;
  correct: boolean;
  question: Question;
}
