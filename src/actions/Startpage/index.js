import { SHOW_LOGIN, LOGIN } from "../../constants/Startpage";

export const showLogin = () => dispatch => {
  dispatch({
    type: SHOW_LOGIN,
    payload: {
        form: 'login'
      }
  })
}

export const showRegister = () => dispatch => {
  dispatch({
    type: SHOW_LOGIN,
    payload: {
      form: 'register'
    }
  })
}

export const login = (username, password) => dispatch => {
  dispatch({
    type: LOGIN,
    payload: {
      login: true,
      username,
      password
    }
  })
}
