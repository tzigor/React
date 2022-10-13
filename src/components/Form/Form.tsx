import './Form.css';
import { FC, useState, useRef } from 'react';
import { TextField } from '@material-ui/core';
import { FormProps } from '../../Types';
import { Button } from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../store/index';
import Input from '@mui/material/Input';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';

let newText: string;
let user: string;

export const Form: FC<FormProps> = ({ chatId }) => {
  const messageInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
  };
  return (
    <form data-testid="formBox" onSubmit={handleSubmit} className="form">
      <TextField
        autoFocus
        inputRef={messageInputRef}
        label="Enter text"
        variant="outlined"
        onChange={(ev) => newText = ev.target.value}
        multiline
        minRows="4"
        maxRows="4"
        className="inputForm"
        inputProps={{ 'data-testid': 'input' }}
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
          onChange={(ev) => user = ev.target.value}
          inputProps={{ 'data-testid': 'input' }}
        />
        <Button click={() => dispatch(addMessage(Number(chatId) - 1,
          { author: user, text: newText }))} />
      </div>
    </form>
  );
};
