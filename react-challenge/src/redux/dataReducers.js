import {
    SET_POSTS,
    LOADING_DATA,
    SET_POST,
    SET_ERRORS,
    CLEAR_ERRORS,
} from './types'

const initialState = {
    loading:true,
    posts:[],
    post:[],
    errors:[]
}

export default function (state= initialState, action){
    switch (action.type){
        case LOADING_DATA:
            return {
                ...state,
                loading: true
              }
        case SET_POSTS:
            return{
                ...state,
                posts: action.payload,
                loading: false
        }
      case SET_POST:
            return{
                ...state,
                post: action.payload,
                loading:false
        };
      case SET_ERRORS:
            return{
                ...state,
                errors: action.payload,
                loading: false
        }
      case CLEAR_ERRORS:
            return{
                ...state,
                errors: [],
                loading: false
        }
      default:
            return state;

    }
}
