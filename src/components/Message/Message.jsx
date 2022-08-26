import React from 'react';
import style from './Message.module.css'

function wordCount(str) {
    const m = str.match(/[^\s]+/g)
    return m ? m.length : 0;
}

function plural(n) {
    if (n === 0) return 'no words'
    else if (n === 1) return '1 word'
    else return n + ' words'
}

export const Message = (props) => {
    return <>
        <div className={style.header}>New text rceived with {plural(wordCount(props.text))}:</div>
        <div className={style.message}>{props.text}</div>
    </>
}