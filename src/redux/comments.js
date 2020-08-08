import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENT: 
            var comment = action.payload;
            comment.id = state.length; //id= size of comments array
            comment.date = new Date().toISOString();
            //state is not mutated, creates a new value and returns it
            return state.concat(comment);
        default:
            return state;
    }
}