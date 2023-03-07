import * as actionTypes from '../actions/actionTypes';

const initialState = [];
export const hotelReducer = (state = initialState, action) => {
    console.log('state',state,'action',action);
    switch(action.type) {
        case actionTypes.VIEW_DETAILS:
            return [...state, action.item];
        case actionTypes.BOOK_NOW:
            return [...state, action.book];
        case actionTypes.CANCEL_EVENT:
            return state.filter(item => item.hotelName !== action.hotelName)
        default:
            return state;    
    }
}
export const searchReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.SEARCH_ITEM:
        return [...state,action.item];
        default:
        return state;
    }
}

export const userReducer = (state=initialState,action) =>{
    switch(action.type){
        case actionTypes.REGISTER_DATA:
            return [...state,action.item];
        default:
            return state;
    }
}
export default userReducer;