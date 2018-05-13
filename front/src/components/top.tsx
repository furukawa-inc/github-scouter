import * as React from 'react'

const Top = (props: any) => (
  <div>
    <input
      type='text'
      value={props.inputValue}
      onChange={e => props.changeText(e.target.value)}
    />
    <button onClick={props.postId}>Send</button>
  </div>
)

export default Top
