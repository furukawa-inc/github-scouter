import * as React from 'react'
import axios from 'axios'

// HACK: componentから分離したい
const postId = (props: any) => {
  axios.post('/post_id', {
    user_name: props.top.inputValue
  }).then((res) => {
    props.postId(res.data)
  })
}

const Top = (props: any) => (
  <div>
    <input
      type='text'
      value={props.top.inputValue}
      onChange={e => props.changeText(e.target.value)}
    />
    <button onClick={() => postId(props)}>Send</button>

    <div>{props.top.combatPower}</div>
  </div>
)

export default Top
