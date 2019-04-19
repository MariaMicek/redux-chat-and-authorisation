const SET = 'messages/SET'
const ADD_MESSAGE = 'messages/ADD_MESSAGES'
const TEXT_CHANGED = 'message/TEXT_CHANGED'

export const textChangedActionCreator = (text) => ({
    type: TEXT_CHANGED,
    text
})

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE,
}) 

const initialState = {
    messages: [],
    newMessageText: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TEXT_CHANGED:
        return{
            ...state,
            newMessageText: action.text,
        }
        case ADD_MESSAGE:
        return{
            ...state,
            messages: state.messages.concat(state.newMessageText),
            newMessageText: '',
        }
        default:
            return state
    }
}
