export default (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_LOGIN':
      return {
        ...action.payload
      }
    default:
      return state
  }
}
