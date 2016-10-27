const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

const initialState = {
    userName: ''
    , email: ''
    , loggedIn: false
};

export default function reducer( state = initialState, action ) {
    switch ( action.type ) {
        case LOGIN:
            return Object.assign( {}, action.user, { loggedIn: true } );
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export function login( user ) {
    return { type: LOGIN, user };
}

export function logout() {
    return { type: LOGOUT };
}
