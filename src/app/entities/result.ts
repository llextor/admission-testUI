import {User} from './user';

export interface Result {
  id?: number;
  correctAnswers: number;
  user: User;
}
