import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=';

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export const CREATE_POSTS = 'CREATE_POSTS';

export function createPost(props) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

    return {
        type: CREATE_POSTS,
        payload: request
    };
}

export const FETCH_POST = 'FETCH_POST';

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}

export const DELETE_POST = 'DELETE_POST';

export function deletePost(id) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: DELETE_POST,
        payload: request
    };
}