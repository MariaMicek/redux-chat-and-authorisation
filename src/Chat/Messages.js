import React from 'react'
import { auth } from '../firebaseConfig'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Delete from '@material-ui/icons/Delete'

const Messages = (props) => {
    return (
        <List
            style={{ 
                width: '50%',
                marginTop: '30px'
            }}
        >
            {
                props.messages &&
                Object.entries(props.messages).concat().reverse().map(
                    ([key, value]) => (
                        <ListItem
                            key={key}
                        >
                            <ListItemAvatar>
                                <Avatar
                                    src={value.author.photoURL}
                                    alt={value.author.displayName}
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary={value.author.displayName}
                                secondary={value.message}
                            />
                            {
                                auth.currentUser.email === value.author.email ?

                                    <IconButton
                                        onClick={() => props.delete(key)}
                                    >
                                        <Delete />
                                    </IconButton>

                                    :
                                    null
                            }
                        </ListItem>
                    )
                )
            }
        </List>
    )
}

export default Messages
