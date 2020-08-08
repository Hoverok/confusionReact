import { DISHES } from '../shared/dishes';

//state= DISHES only if state is undefined
export const Dishes = (state = DISHES, action) => {
    switch(action.type) {
        default:
            return state;
    }
}