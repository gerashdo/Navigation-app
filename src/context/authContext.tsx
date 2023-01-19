import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";


export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

export const authInitialState: AuthState = {
    isLoggedIn: false
}

// Lo que va a exponer
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void,
    logout: () => void;
    changeUsername: (username: string) => void;
    changeFavIcon: (iconName: string) => void;
}

export const AuthContext = createContext( {} as AuthContextProps )

export const AuthProvider = ({ children }: any) => {

    const [ authState, dispatch ] = useReducer( authReducer, authInitialState )

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }

    const changeFavIcon = ( iconName: string ) => {
        dispatch({ type: 'changeIcon', payload: iconName })
    }

    const logout = () => {
        dispatch({ type: 'logout' })
    }

    const changeUsername = ( username: string ) => {
        dispatch({ type: 'changeUsername', payload: username })
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeUsername,
            changeFavIcon,
        }}>
            { children }
        </AuthContext.Provider>
    )
}