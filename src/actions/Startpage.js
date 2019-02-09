import {SHOW_LOGIN} from "../constants/Startpage";

export const startpageInitAction = () => dispatch => {
  dispatch({
    type: SHOW_LOGIN,
    payload: {
      startpage: {
        form: 'login'
      }
    }
  })
}

export const showRegisterAction = () => dispatch => {
  dispatch({
    type: SHOW_LOGIN,
    payload: {
      startpage: {
        form: 'register'
      }
    }
  })
}
