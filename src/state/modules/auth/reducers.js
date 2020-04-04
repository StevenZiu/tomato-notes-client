import { START_LOGIN, END_LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from "./type"
import { init } from "ramda"

const initState = {
  isAuth: false,
  token: "",
  user: {},
  isLogining: false,
  loginError: ""
}

const auth = (state = initState, actions) => {
  switch (actions.type) {
    case START_LOGIN:
      return { ...initState, isLogining: true }
    case END_LOGIN:
      return { ...initState, isLogining: false }
    case LOGIN_FAIL:
      return { ...initState, loginError: actions.reason }
    case LOGIN_SUCCESS:
      return { ...initState, isAuth: true, token: actions.token }
    default:
      return state
  }
}

export default auth
