import { SHOW_LOGIN } from "../../constants/Startpage";

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
