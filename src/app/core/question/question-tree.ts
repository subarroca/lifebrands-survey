import { Question } from './question';

export interface QuestionTree {
  tribe: Question[];
  feeling1: Question[];
  feeling2: Question[];
  contact: Question[];
  feedback: Question[];
}
