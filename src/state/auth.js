import { database, auth, googleProvider } from '../firebaseConfig'

const SET_USER = 'auth/SET_USER'
const LOADING = 'auth/LOADING'

const setUserActionCreator = user => ({
    type: SET_USER,
    user,
})
export const loadingActionCreator = value => ({
    type: LOADING,
    value,
})

export const logInAsyncActionCreator = () => (dispatch, getState) => {
    auth.signInWithPopup(googleProvider)
}
export const startListeningForUserAsyncActionCreator = () => (dispatch, getState) => {
    auth.onAuthStateChanged(
        user => {
            if (user) {
                dispatch(setUserActionCreator(user))
                dispatch(loadingActionCreator(false))
            } else {
                dispatch(stopListeningToMessagesAsyncActionCreator())
                dispatch(setUserActionCreator(user))
                dispatch(loadingActionCreator(false))
            }
        }
    )
}
const stopListeningToMessagesAsyncActionCreator = () => (dispatch, getState) => {
    database.ref(`/messages`).off()
}
export const logOutAsyncActionCreator = () => (dispatch, getState) => {
    auth.signOut()
}

const initialState = {
    user: null,
    isLoading: true,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,
            
            }
        case LOADING:
            return {
                ...state,
                isLoading: action.value,
            }; 
        default:
            return state
    }
}