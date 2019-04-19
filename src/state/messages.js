import { database, auth } from '../firebaseConfig'

const SET = 'messages/SET'
const TEXT_CHANGED = 'message/TEXT_CHANGED'

export const textChangedActionCreator = (text) => ({
    type: TEXT_CHANGED,
    text
})
const setMessagesActionCreator = (messages) => ({
    type: SET,
    messages
})

export const startListeningToMessagesAsyncActionCreator = () => (dispatch, getState) => {
    database.ref(`/messages`).on(
        'value',
        snapshot => dispatch(setMessagesActionCreator(snapshot.val()))
    )
}
export const addMessageAsyncActionCreator = () => (dispatch, getState) => {
    const state = getState()
    const message = state.messages.newMessageText
    const user = auth.currentUser

    if (message === '') return

    database.ref(`/messages`).push({
        message,
        author: {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
        },
        date: Date.now(),
    })

    dispatch(textChangedActionCreator(''))
}
export const onDeleteMessageAsyncActionCreator = (id) => (dispatch, getState) => {
    database.ref(`/messages/${id}`).remove()
}
export const toggleFavoriteAsyncActionCreator = (id) => (dispatch, getState) => {
    const state = getState()
    const isFav = state.messages.messages[id].isFav 
    const userId = state.auth.user.uid
    
    const ref = database.ref(`/messages/${id}/isFav/${userId}`)
    
    console.log(isFav, ref)

    if (isFav) {
        ref.set(null)
    }else{
        ref.set(true)
    }
}

const initialState = {
    messages: [],
    newMessageText: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TEXT_CHANGED:
            return {
                ...state,
                newMessageText: action.text,
            }
        case SET:
            return {
                ...state,
                messages: action.messages
            }
        default:
            return state
    }
}
