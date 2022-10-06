import { useState, useRef, useEffect, FC } from 'react';
import '../index.css';
import { Message } from '../components/Message/Message';
import { Form } from '../components/Form/Form';
import { randomMessage } from '../Utils';
import { MessageItems, MainProps, ChatList } from '../Types';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, ChatListState } from '../store/index';

export const ChatPage = () => {
    const [count, setCount] = useState(0);
    const [lastUser, setLastUser] = useState('');
    const [reRender, setRender] = useState(true);
    const chatListState = useSelector((state: ChatListState) => state.store.chatList);

    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        const timeout = setTimeout(() => {
            chatList[Number(chatId) - 1].chat = [
                ...chatList[Number(chatId) - 1].chat,
                {
                    id: chatList[Number(chatId) - 1].chat.length + 1,
                    author: 'Robot',
                    text: 'Hi ' + lastUser + '. ' + randomMessage(),
                },
            ];
            setChatList(chatList);
            setRender(!reRender);
        }, 1500);
        return () => clearTimeout(timeout);
    }, [count]);

    const navigate = useNavigate();
    const handleClick = () => {
        chatList.splice(Number(chatId) - 1, 1);
        navigate('/Main');
    };
    const { chatId } = useParams();

    if (!chatId || isNaN(Number(chatId)) || Number(chatId) > chatList.length) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="App">
            <p>{chatList[Number(chatId) - 1].name}</p>
            <Form
                chatId={chatId}
                setCount={setCount}
                setLastUser={setLastUser}
            />
            <Message chatId={chatId} chatList={chatList} />
            <button className="delButton" onClick={handleClick}>
                Delete chat
            </button>
            <p>Total {count} messages received from users</p>
        </div>
    );
};
