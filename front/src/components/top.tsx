import * as React from 'react';
import axios from 'axios';
import { TwitterShareButton, TwitterIcon } from 'react-share';


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
        <button onClick={() => postId(props)}>Submit</button>

        <div>{props.top.combatPower}</div>

        <div>
            <TwitterShareButton
                url={location.href}
                title={props.top.combatPower.toString()}
                via="github_scouter"
            >
                <TwitterIcon
                    size={25}
                    round={true}
                ></TwitterIcon>
            </TwitterShareButton>
        </div>
    </div>
)

export default Top
