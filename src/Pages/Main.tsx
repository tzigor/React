import React from 'react';
import { Chats } from '../Types';
import { NavLink } from 'react-router-dom';
import { ListItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import './pages.css';
import { addChat, ChatListState } from '../store/index';

export const Main = () => {
    const dispatch = useDispatch();
    const chatListState = useSelector((state: ChatListState) => state.main.chatList);
    let chatName = '';

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    className="input"
                    onChange={(ev) => chatName = ev.target.value}
                />
                <button className="button" onClick={() => dispatch(addChat(chatName))}>
                    Add chat
                </button>
            </form>

            {chatListState.map((item: Chats, indx: number) => {
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
