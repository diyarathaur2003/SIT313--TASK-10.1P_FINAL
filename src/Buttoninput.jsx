import React from 'react'
import { Button } from 'semantic-ui-react'
import './Buttoninput.css'
function Buttoninput(props) {
    return (
        <div className="button">
            <Button>{props.text}</Button>
        </div>
    )
}
export default Buttoninput
