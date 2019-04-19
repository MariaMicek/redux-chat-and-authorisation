import React from 'react'
import { connect } from 'react-redux'
import { textChangedActionCreator, addMessageActionCreator } from '../state/messages'
import Messages from './Messages'

const Chat = (props) => {
	return (
		<div>
			<input
				value={props._newMessage}
				onChange={(event) => props._changeText(event.target.value)}
			/>
			<button
				onClick={props._addMessage}
			>
				ADD
       		</button>
			<Messages
				messages={props._messages}
			/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	_messages: state.messages.messages,
	_newMessage: state.messages.newMessageText,
})

const mapDispatchToProps = (dispatch) => ({
	_changeText: (event) => dispatch(textChangedActionCreator(event)),
	_addMessage: () => dispatch(addMessageActionCreator()),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Chat)
