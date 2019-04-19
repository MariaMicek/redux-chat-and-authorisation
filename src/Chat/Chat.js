import React from 'react'
import { connect } from 'react-redux'
import { textChangedActionCreator, addMessageAsyncActionCreator} from '../state/messages'
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
			<div>
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
			</div>
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
	_addMessage: () => dispatch(addMessageAsyncActionCreator()),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Chat)
