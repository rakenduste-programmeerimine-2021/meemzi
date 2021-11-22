import { POST_ADD, POST_UPDATE, POST_REMOVE, USER_LOGIN, USER_LOGOUT } from "./actions";

const postReducer = (state, action) => {
  switch(action.type){
    case POST_ADD:
      return {
        ...state,
        data: state.data.concat(action.payload)
      };
    case POST_REMOVE:
      return {
        ...state,
        data: state.data.filter(post => post.id !== action.payload)
      }
    // Kodutööna uue listi vastu võtmine maybe
    case "POSTS_UPDATE": 
        return {
          ...state,
          data: action.payload
        }
    default:
      return state
  }
}

const authReducer = (state, action) => {
  switch(action.type){
    case USER_LOGIN:
      return {
        ...state,
        token: action.payload.token,
        user: {
          userName: userName.action.payload.userName,
          password: action.payload.password
        }


      }
    case USER_LOGOUT:
      return {
        ...state,
        token: null,
        user: null
      }
    default:
      return state
  }
}

export { postReducer, authReducer }