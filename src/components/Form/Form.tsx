import './Form.css';
import { FC, useState, useRef } from 'react';
import { TextField } from '@material-ui/core';
import { MessageItems, FormProps, ChatList } from '../../Types';
import { InputUser } from '../InputUser/InputUser';
import { Button } from '../Button/Button';

export const Form: FC<FormProps> = ({
  chatId,
  chatList,
  setChatList,
  setCount,
  setLastUser,
}) => {
  const [textToBeSend, setTextToBeSend] = useState('');
  const [user, setUser] = useState('');

  const messageInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (user && textToBeSend) {
      const updateMessage: MessageItems = [
        ...chatList[Number(chatId) - 1].chat,
        {
          id: chatList[Number(chatId) - 1].chat.length + 1,
          author: user,
          text: textToBeSend,
        },
      ];
      chatList[Number(chatId) - 1].chat = updateMessage;
      setChatList(chatList);
      setCount(updateMessage.length);
      setLastUser(user);
    }
    messageInputRef.current?.focus();
  };

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
        onChange={(ev) => setTextToBeSend(ev.target.value)}
        multiline
        minRows="4"
        maxRows="4"
        className="inputForm"
        value={textToBeSend}
        inputProps={{ 'data-testid': 'input' }}
      />
      <div className="inputUser">
        <InputUser changeUser={setUser} />
        <Button click={handleClick} />
      </div>
    </form>
  );
};
