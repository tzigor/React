import './Form.css';
import { React, useState } from 'react';
import { TextField } from '@material-ui/core';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';

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
      <TextField
        label="Enter text"
        variant="outlined"
        onChange={handleChangeTextToBeSend}
        multiline
        minRows="4"
        maxRows="4"
        className="inputForm"
      />
      <div className="inputUser">
        <Input
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          style={{ width: '150px' }}
          placeholder="User"
          onChange={handleChangeUser}
        />
        <button className="buttonSend" onClick={handleClick}>
          Send message
        </button>
      </div>
    </form>
  );
};
