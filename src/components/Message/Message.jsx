import { React } from 'react';
import './Message.css';

export const Message = ({ messageList }) => {
  let messageStyle = '';
  return (
    <>
      <div data-testid="messageBox" className="messageBox">
        {messageList.map((item) => {
          if (item.author === 'Robot') messageStyle = 'robotMessage';
          else messageStyle = 'message';
          return (
            <div className={messageStyle} key={item.id}>
              <p className="userStyle">{item.author}:</p>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
