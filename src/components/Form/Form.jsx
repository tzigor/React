import './Form.css';
import { React, useState } from 'react';

export const Form = ({ message, handleChangeText, setCount, setLastUser }) => {
  const [textToBeSend, setTextToBeSend] = useState('');
  const [user, setUser] = useState('');

  const handleClick = () => {
    if (!(user === '')) {
      const updateMessage = [
        ...message,
        { id: message.length + 1, author: user, text: textToBeSend },
      ];
      handleChangeText(updateMessage);
      setCount(updateMessage.length);
      setLastUser(user);
    }
  };

  const handleChangeTextToBeSend = (ev) => {
    setTextToBeSend(ev.target.value);
  };

  const handleChangeUser = (ev) => {
    setUser(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form data-testid="formBox" onSubmit={handleSubmit} className="form">
      <textarea
        className="inputForm"
        type="text"
        onChange={handleChangeTextToBeSend}
        placeholder="Message"
      />
      <div className="inputUser">
        <input
          className="userForm"
          type="text"
          onChange={handleChangeUser}
          placeholder="Name"
        />
        <button className="buttonSend" onClick={handleClick}>
          Send message
        </button>
      </div>
    </form>
  );
};
