import * as ActionTypes from './ActionTypes';

export const Comments = (state = { errMess: null, comments:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
        //take state, create a new object from it and return new object. The original state does not mnutate
      return {...state, errMess: null, comments: action.payload};

    case ActionTypes.COMMENTS_FAILED:
      return {...state, errMess: action.payload};

    case ActionTypes.ADD_COMMENT:
        var comment = action.payload;
        comment.id = state.comments.length; //id= size of comments array
        comment.date = new Date().toISOString();
        return { ...state, comments: state.comments.concat(comment)};

    default:
      return state;
  }
};