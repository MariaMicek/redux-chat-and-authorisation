import React from 'react'
import { connect } from 'react-redux'
import { textChangedActionCreator, addMessageAsyncActionCreator, onDeleteMessageAsyncActionCreator, toggleFavoriteAsyncActionCreator } from '../state/messages'
import { logOutAsyncActionCreator } from '../state/auth'
import Messages from './Messages'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = {
	container: {
		display: 'flex',
		alignItems: 'center',
		paddingTop: '20px',
		flexDirection: 'column'
	},
	button: {
		height: '56px',
		marginLeft: '15px'
	}
}

const Chat = (props) => {
	return (
		<div
			style={styles.container}
		>
			<form
				onSubmit={(event) => {
					event.preventDefault()
					props._addMessage()
				}}
			>
				<TextField
					label={'Enter your message'}
					variant={'outlined'}
					value={props._newMessage}
					onChange={(event) => props._changeText(event.target.value)}
				/>
				<Button
					style={styles.button}
					variant={'outlined'}
					onClick={props._addMessage}
				>
					ADD
       			</Button>
				<Button
					style={styles.button}
					variant={'outlined'}
					onClick={props._logOut}
				>
					LOG OUT
       			</Button>
			</form>
			<Messages
				messages={props._messages}
				delete={props._deleteMessage}
				toggleFavorite={props._toggleFavorite}
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
	_addMessage: () => dispatch(addMessageAsyncActionCreator()),
	_logOut: () => dispatch(logOutAsyncActionCreator()),
	_deleteMessage: (id) => dispatch(onDeleteMessageAsyncActionCreator(id)),
	_toggleFavorite: (id) => dispatch(toggleFavoriteAsyncActionCreator(id))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Chat)
