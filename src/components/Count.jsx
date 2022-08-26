import { useState } from "react";
import React from 'react';

export const Count = (props) => {
    const [count, setCount] = useState(1)

    const handleClick = () => {
        setCount(count + 1)
    }

    return <>
        <p>count state: {count}</p>
        <button type='button' onClick={handleClick}>click</button>
    </>
}