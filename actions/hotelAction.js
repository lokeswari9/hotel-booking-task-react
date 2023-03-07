import * as actionTypes from './actionTypes';

export const viewDetails = (item) => {
    return {
        type: actionTypes.VIEW_DETAILS,
        item
    }
}
export const bookNow = (book) => {
    return {
        type: actionTypes.BOOK_NOW,
        book
    }
}
export const cancelEvent = (hotelName) => {
    return {
        type: actionTypes.CANCEL_EVENT,
        hotelName
    }
}
export const searchItem = (item) =>{
    return{
        type:actionTypes.SEARCH_ITEM,
        item
    }
}