import React from 'react';
import style from './Message.module.css'

function wordCount(str) {
    const m = str.match(/[^\s]+/g)
    return m ? m.length : 0;
}

export const Message = (props) => {
    return <>
        <div className={style.header}>New text rceived with {wordCount(props.text)} words:</div>
        <div className={style.message}>{props.text}</div>
    </>
}