import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

const ButtonState = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h4>Total Click</h4>
            <h5>{count}</h5>
            <button className="btn btn-outline-primary" onClick={()=>setCount(count+1)}>Plus</button>
            <button className="btn btn-outline-primary" onClick={()=>setCount(count-1)}>Minus</button>
        </div>
    )
}

export default ButtonState;