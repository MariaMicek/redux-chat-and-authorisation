import React from 'react'

const Messages = (props) => {
    return (
      <div>
       {
           props.messages.map(
               message => (
                   <p>
                       {message}
                   </p>
               )
           )
       }
      </div>
    )
}

export default Messages
