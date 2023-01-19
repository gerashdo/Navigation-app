import { AuthState } from "./authContext";

type AuthAction = 
    { type: 'signIn' }
    | { type: 'changeIcon', payload: string }

export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
    switch ( action.type ) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'not-username-yet'
            }
        case 'changeIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
        default:
            return state;
    }
}