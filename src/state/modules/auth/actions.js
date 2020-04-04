import { START_LOGIN, END_LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from "./type"
import http from "../../../config/axios"

// control login status flag
const startLogin = () => {
  return {
    type: START_LOGIN
  }
}

const endLogin = () => {
  return {
    type: END_LOGIN
  }
}

const loginSuccess = token => {
  return {
    type: LOGIN_SUCCESS,
    token
  }
}

const loginFail = reason => {
  return {
    type: LOGIN_FAIL,
    reason
  }
}

const startLogin = userCredentials => {
  return dispatch => {
    dispatch(startLogin())
    return http
      .post("/auth/login", { ...userCredentials })
      .then(res => {
        if (res.status === 200) {
          // TODO: fire another api call to get user information
          dispatch(loginSuccess(res.data))
        } else {
          dispatch(loginFail(res.data))
        }
        dispatch(endLogin())
      })
      .catch(err => {
        console.log(err)
        dispatch(loginFail(err))
      })
  }
}
