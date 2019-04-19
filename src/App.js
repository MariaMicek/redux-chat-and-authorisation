import React from 'react'
import Chat from './Chat'
import Auth from './Auth'

const App = (props) => {
    return (
        <div>
            <Auth>
                <Chat />
            </Auth>
        </div>
    )
}

export default App