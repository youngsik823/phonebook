import { act } from "react";

const initialState = {
    contactList:[],
    search:""
};

function reducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case "ADD_CONTACT":
            return {...state, contactList:[...state.contactList, {name: payload.name,phoneNumber: payload.phoneNumber}]}
        case "SEARCH_NAME":
            return {...state, search: payload.search}
        default:
            return {...state};
    }
}
export default reducer;
