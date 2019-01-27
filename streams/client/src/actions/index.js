import streams from '../api/streams';
import history from '../history';
import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM, 
    FETCH_STREAM, 
    FETCH_STREAMS, 
    EDIT_STREAM, 
    DELETE_STREAM 
} from './types';



export const signIn = ( user_id ) => {
    return { type: SIGN_IN, payload: user_id }
}


export const signOut = () => {
    return { type: SIGN_OUT }
}


export const createStream = ( formValues ) => async ( dispatch, getState ) => {
    const { user_id } = getState().auth;
    const response = await streams.post( '/streams', { ...formValues, user_id: user_id} );
    dispatch({ type: CREATE_STREAM, payload: response.data });

    history.push( '/' );
}


export const fetchStreams = () => async dispatch => {
    const response = await streams.get( '/streams' );
    dispatch({ type: FETCH_STREAMS, payload: response.data });
}


export const fetchStream = ( id ) => async dispatch => {
    const response = await streams.get( `/streams/${id}` );
    dispatch({ type: FETCH_STREAM, payload: response.data });
}


export const editStream = ( id, formValues ) => async dispatch => {
    const response = await streams.patch( `/streams/${id}`, formValues );
    dispatch({ type: EDIT_STREAM, payload: response.data });

    history.push( '/' );
}


export const deleteStream = ( id ) => async dispatch => {
    await streams.delete( `/streams/${id}` );
    dispatch({ type: DELETE_STREAM, payload: id });
}
