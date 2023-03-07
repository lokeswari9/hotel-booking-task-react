import * as actionTypes from './actionTypes';

export const registerData = (item) => {
    return {
        type: actionTypes.REGISTER_DATA,
        item
    }
}