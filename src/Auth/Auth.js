import React from 'react'
import { connect } from 'react-redux'
import { logInAsyncActionCreator } from '../state/auth'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

const Auth = (props) => {
    return (
        <div>
            {
                props._isLoading ?
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100vh'
                        }}
                    >
                        <CircularProgress
                            style={{ color: 'grey' }}
                        />
                    </div>
                    :
                    props._user ?
                        props.children
                        :
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100vh'
                            }}
                        >
                            <Button
                                variant={'outlined'}
                                onClick={props._logIn}
                            >
                                LOG IN BY GOOGLE
                            </Button>
                        </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    _user: state.auth.user,
    _isLoading: state.auth.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
    _logIn: () => dispatch(logInAsyncActionCreator())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)