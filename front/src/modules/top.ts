// import axios from 'axios'

const initialState = {
  inputValue: ''
}

const reducer = (state = initialState, action: any) => {
  switch(action.type) {
    case 'CHANGE_TEXT':
      return Object.assign({}, state, {
        inputValue: action.value
      })
    case 'POST_ID':
      console.log(state.inputValue)
      return
    default:
      return state
  }
}

export default reducer

export const changeText = (etv: any) => {
  return {type: 'CHANGE_TEXT', value: etv }
}

export const postId = () => {
  return {type: 'POST_ID'}
}
