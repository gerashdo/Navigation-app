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

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavIcon,
        }}>
            { children }
        </AuthContext.Provider>
    )
}