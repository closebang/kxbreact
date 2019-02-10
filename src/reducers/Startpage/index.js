import { SHOW_LOGIN } from "../../constants/Startpage";

export default function Startpage(state = {}, action) {
  switch (action.type) {
    case SHOW_LOGIN:
      return {
        ...action.payload
      }
    default:
      return state
  }
}
