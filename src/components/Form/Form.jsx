import './Form.css'
import React from 'react';
import { useState } from "react";

export const Form = ({ message, handleChangeText, count }) => {
    const [textToBeSend, setTextToBeSend] = useState('')
    const [user, setUser] = useState('')

    const handleClick = () => {
        if (!(user === '')) {
            message.push({ id: message.length + 1, author: user, text: textToBeSend });
            handleChangeText(message);
            console.log(message);
            count(message.length)
        }
    }

    const handleChangeTextToBeSend = (ev) => {
        setTextToBeSend(ev.target.value)
    }

    const handleChangeUser = (ev) => {
        setUser(ev.target.value)
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
    }

    return <form onSubmit={handleSubmit} className="form">
        <textarea className="inputForm" type='text' onChange={handleChangeTextToBeSend} placeholder="Message" />
        <div className="inputUser">
            <input className="userForm" type='text' onChange={handleChangeUser} placeholder="Name" />
            <button className="buttonSend" onClick={handleClick}>Send message</button>
        </div>
    </form>
}