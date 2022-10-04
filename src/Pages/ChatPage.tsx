import { useState, useRef, useEffect, FC } from 'react';
import '../index.css';
import { Message } from '../components/Message/Message';
import { Form } from '../components/Form/Form';
import { randomMessage } from '../Utils';
import { MessageItems, MainProps } from '../Types';
import { useParams, Navigate, useNavigate } from 'react-router-dom';

export const ChatPage: FC<MainProps> = ({ chatList }) => {
  const [count, setCount] = useState(0);
  const [messageList, setMessageList] = useState<MessageItems>([]);
  const [lastUser, setLastUser] = useState('');

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const timeout = setTimeout(() => {
      const updateMessage: MessageItems = [
        ...messageList,
        {
          id: messageList.length + 1,
          author: 'Robot',
          text: 'Hi ' + lastUser + '. ' + randomMessage(),
        },
      ];
      setMessageList(updateMessage);
      chatList[Number(chatId) - 1].chat = updateMessage;
    }, 1500);
    return () => clearTimeout(timeout);
  }, [count]);

  const navigate = useNavigate();
  const handleClick = () => {
    setMessageList([]);
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
        message={messageList}
        handleChangeText={setMessageList}
        setCount={setCount}
        setLastUser={setLastUser}
      />
      <Message messageListProp={chatList[Number(chatId) - 1].chat} />
      <button className="delButton" onClick={handleClick}>
        Delete chat
      </button>
      <p>Total {count} messages received from users</p>
    </div>
  );
};
