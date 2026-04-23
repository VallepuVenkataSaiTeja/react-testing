import { useState } from "react";

function Input(){
    const [value, setValue] = useState('')
    return (
        <div>
            <input type="text" placeholder="enter name" id="name"
            value={value} onChange={e => setValue(e.target.value)} />
        </div>
    )
}
export default Input;