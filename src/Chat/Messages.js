import React from 'react'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'
// import ListItemAvatar from '@material-ui/core/ListItemAvatar'
// import Avatar from '@material-ui/core/Avatar'

const Messages = (props) => {
    return (
        <div>
            {
                props.messages &&
                Object.entries(props.messages).map(
                    ([key, value]) => (
                        <p
                            key={key}
                        >
                            {value.message}
                        </p>
                    )
                )
            }
        </div>
    )
}

export default Messages
