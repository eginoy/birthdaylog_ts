import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { Redirect, Route, RouteComponentProps } from 'react-router-dom'
import * as auth from './auth'
import { userState } from '../state/User'

interface Props {
    Component: React.FC<RouteComponentProps>
    path: string
    exact?: boolean
}

const AuthRoute = ({ Component, path, exact = false }: Props) => {
    useEffect(() => {
        auth.authUser().then(user => {
            setUser({
                Uid: user.uid,
                Name: user.displayName
            })
        })
    }, []);

    const isAuthed = false
    const setUser = useSetRecoilState(userState)
    const message = '管理者の承認待機中です'
    
    return (
        <Route
            exact={exact}
            path={path}
            render={(props: RouteComponentProps) =>
                isAuthed ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: {
                                    message
                                }

                            }}
                        />
                    )
            }
        />
    )
}

export default AuthRoute