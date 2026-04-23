import { useState } from "react";

function Button(){
    const [text,setText] = useState('Click')
    return (
        <div>
            <button onClick={()=>setText('clicked')}>{text}</button>
            
        </div>
    )
}
export default Button;