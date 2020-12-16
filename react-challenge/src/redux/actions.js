import {
    SET_POSTS,
    LOADING_DATA,
    SET_POST,
} from './types'
import axios from 'axios'

export const getPosts = (url) => (dispatch) => {
    dispatch({ type: LOADING_DATA })
    axios.get(url)
    .then((res)=>{
        dispatch({
            type: SET_POSTS,
            payload:res.data
        })
    })
    .catch((err)=> {console.log(err)})
}

export const getPost = (url) => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios.get(url)
    .then((res)=>{
        dispatch({
            type: SET_POST,
            payload:res.data
        })
    })
    .catch((err)=> {console.log(err)})
}