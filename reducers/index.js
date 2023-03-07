import { combineReducers } from 'redux';

import {hotelReducer,userReducer, searchReducer} from './hotelReducer';

const rootReducer = combineReducers({
    view: hotelReducer,
    book: hotelReducer,
    search: searchReducer,
    register: userReducer
});

export default rootReducer;