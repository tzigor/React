import style from './Form.module.css'
import React from 'react';
import { useState } from "react";

export const Form = ({ handleChangeText }) => {
    const [textToBeSend, setTextToBeSend] = useState('')

    const handleClick = () => {
        handleChangeText(textToBeSend)
    }

    const handleChangeTextToBeSend = (ev) => {
        setTextToBeSend(ev.target.value)
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
    }

    return <form onSubmit={handleSubmit} className={style.form}>
        <textarea className={style.inputForm} type='text' onChange={handleChangeTextToBeSend} />
        <button className={style.buttonSend} onClick={handleClick}>Send message</button>
    </form>

}