
import React from 'react';
import { Count as CountClass } from "./class-components/Count";
import { Form as FormClass } from "./class-components/Form";

import { useState } from "react";
import { Child } from "./components/Child";
import { Count } from "./components/Count";

import './index.css'
import { Form } from "./components/Form/Form";

export function App() {
    const [name, setName] = useState('Igor')
    const [count, setCount] = useState(0)
    // const [arr, setArr] = useState(['Ivanov', 'Petrov', 'Sidorov'])
    const arr = ['Ivanov', 'Petrov', 'Sidorov']

    const handleChangeName = (ev) => {
        setName(ev.target.value)
    }

    return (
        <div className="App">
            <h2 style={{ backgroundColor: 'green' }}>Class component</h2>
            <CountClass count={10} />
            <hr />
            <FormClass />
            <h2>Function component</h2>
            <Count />
            <hr />
            <h3>Parent component</h3>
            <p>{count}</p>
            <input onChange={handleChangeName} />
            <h3>Child component</h3>
            <Child name={name} handleChangeCount={setCount} />
            {arr.map((item, idx) => <div key={idx}>{item}</div>)}
            <Form />
        </div>
    )
}

