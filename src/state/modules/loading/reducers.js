import { START_LOADING, END_LOADING } from "./types"

const initState = {
  isLoading: false
}

export const loading = (state = initState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true }
    case END_LOADING:
      return { ...state, loading: false }
    default:
      return state
  }
}
