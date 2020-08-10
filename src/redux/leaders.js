import * as ActionTypes from './ActionTypes';

export const Leaders = (state = {
    isLoading: true,
    errMess: null,
    leaders: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            //take state, create a new object from it and return new object. The original state does not mnutate
            return { ...state, isLoading: false, errMess: null, leaders: action.payload };

        case ActionTypes.LEADERS_LOADING:
            return { ...state, isLoading: true, errMess: null, leaders: [] }

        case ActionTypes.LEADERS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, leaders: [] };

        default:
            return state;
    }
};