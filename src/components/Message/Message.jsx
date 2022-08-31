import React from 'react';
import './Message.css'

export const Message = ({ messageList }) => {
    return <>
        <div className="message">
            {messageList.map((item, index) => <div key={item.id}>{item.author}: {item.text}</div>)}
        </div>
    </>
}