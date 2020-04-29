import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPosts = () => async dispatch => {
    const promise = await jsonPlaceholder.get('/posts');
    
    dispatch({
        type:'FETCH_POSTS',
        payload: promise.data
    });
}

export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id,dispatch) => {

    const responce = await jsonPlaceholder.get(`/users/${id}`);
    
    dispatch({
        type:'FETCH_USER',
        payload: responce.data
    });
});
