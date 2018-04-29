import {Category} from './category';

export interface Question {
  id?: number;
  questionCategory?: Category;
  questionStr?: string;
}
