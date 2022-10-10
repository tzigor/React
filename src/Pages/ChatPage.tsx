import { useState, useRef, useEffect, FC } from 'react';
import '../index.css';
import { Message } from '../components/Message/Message';
import { Form } from '../components/Form/Form';
import { randomMessage } from '../Utils';
import { MessageItems, MainProps, ChatList } from '../Types';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, ChatListState } from '../store/index';
import { addMessage } from '../store/index';

export const ChatPage = () => {
    const navigate = useNavigate();
    const { chatId } = useParams();
    // const [count, setCount] = useState(0);
    const [reRender, setRender] = useState(true);
    const chatListState = useSelector((state: ChatListState) => state.main.chatList);
    const countState = useSelector((state: ChatListState) => state.main.count);
    const userState = useSelector((state: ChatListState) => state.main.lastUser);
    const dispatch = useDispatch();
    console.log(chatListState);
    console.log(chatListState.count);

    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        const timeout = setTimeout(() => {
            dispatch(addMessage(Number(chatId) - 1,
                { author: 'Robot', text: 'Hi, ' + userState + '. ' + randomMessage() }))
            setRender(!reRender);
        }, 1500);
        return () => clearTimeout(timeout);
    }, [countState]);

    // const navigate = useNavigate();
    const handleClick = () => {
        // chatListState.splice(Number(chatId) - 1, 1);
        navigate('/Main');
    };
    // const { chatId } = useParams();

    if (!chatId || isNaN(Number(chatId)) || Number(chatId) > chatListState.length) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="App">
            <p>{chatListState[Number(chatId) - 1].name}</p>
            <Form chatId={chatId} />
            <Message chatId={chatId} chatList={chatListState} />
            <button className="delButton" onClick={handleClick}>
                Delete chat
            </button>
            <p>Total {countState} messages received from users</p>
        </div>
    );
};
