const initialState = {
  inputValue: '',
  combatPower: 0
}

const reducer = (state = initialState, action: any) => {
  switch(action.type) {
    case 'CHANGE_TEXT':
      return Object.assign({}, state, {
        inputValue: action.value
      })
    case 'POST_ID':
      return Object.assign({}, state, {
        combatPower: action.value
      })
    default:
      return state
  }
}

export default reducer

export const changeText = (etv: any) => {
  return {type: 'CHANGE_TEXT', value: etv }
}

export const postId = (userName: any) => {
  return {type: 'POST_ID', value: userName}
}
