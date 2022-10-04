import React, { FC, useState } from 'react';
import { ChatList, MainProps } from '../Types';
import { NavLink } from 'react-router-dom';
import { ListItem } from '@mui/material';
import './pages.css';

export const Main: FC<MainProps> = ({ chatList, handleChatList }) => {
  const [chatName, setChatName] = useState('');
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
  };
  const handleClick = () => {
    if (chatName) {
      const updateChats: ChatList = [
        ...chatList,
        { id: chatList.length + 1, name: chatName, chat: [] },
      ];
      handleChatList(updateChats);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          onChange={(ev) => setChatName(ev.target.value)}
        />
        <button className="button" onClick={handleClick}>
          Add chat
        </button>
      </form>

      {chatList.map((item, indx) => {
        return (
          <ListItem key={indx}>
            <NavLink to={`/chats/${indx + 1}`}>
              <p>{item.name}</p>
            </NavLink>
          </ListItem>
        );
      })}
    </>
  );
};
