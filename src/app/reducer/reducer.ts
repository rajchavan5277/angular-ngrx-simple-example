import { Action } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from '../action/tutorial.action';


// section create state 
const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}


// Section 2
export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
  switch(action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];
    default: 
      return state;  
  }
}