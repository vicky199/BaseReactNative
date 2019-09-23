import * as actionType from './action'

const initialState = {
    name:'I',
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.BUTTON_CLICK:
            return {
                ...state,
                name: 'I Am Here!'
            }

        default:
            return state;
    }
    
}
export default loginReducer;
