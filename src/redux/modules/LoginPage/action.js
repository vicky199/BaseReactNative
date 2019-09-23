


export const BUTTON_CLICK = 'BUTTON_CLICK';



export function loginIsLoading(value) {
    return {
        type: BUTTON_CLICK,
       value : value
    };
}


export function buttonClick() {
    return (dispatch) => {
        dispatch(loginIsLoading('true'));
       
    }
}
//  doLoginWithToken =  (token) =>{
//     return (dispatch) => {
//         dispatch(loginIsLoading(true));
//       axios.get('https://graph.facebook.com/me?access_token='+token)
//             .then((response) => {
//                 dispatch(loginIsLoading(false));
//                 dispatch(loginFetchDataSuccess(response.data))
//             })
//             .catch((err) => {
//                 dispatch(loginHasError(true))
//             });

//     }
// }
// storeData = async (token) => {
//     try {
//         await AsyncStorage.setItem('facebookToken', token)
//     } catch (e) {
//     }
// }

export const mapLoginStateToProps = (state) => {
    return {
        name: state.loginReducer.name
    };
};

export const mapLoginDispatchToProps = (dispatch) => {
    return {
        buttonClick: () => dispatch(buttonClick()),
    };
};