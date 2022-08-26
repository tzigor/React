import style from './Form.module.css'
import React from 'react';


export const Form = () => {
    const count = 1;
    const name = 'Igor';
    return <form className={style.form}>
        <p>count: {count}</p>
        <p>name: {name}</p>
        {/* <input type='text' /> */}
        <button type='button'>clock</button>
    </form>
}