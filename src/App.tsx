import { useState, useRef, useEffect, FC } from 'react';
import './index.css';
import { Message } from './components/Message/Message';
import { Form } from './components/Form/Form';
import { randomMessage } from './Utils';
import { MessageItems } from './Types';

export const App: FC = () => {
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
    }, 1500);
    return () => clearTimeout(timeout);
  }, [count]);

  const handleClick = () => {
    setMessageList([]);
  };

  return (
    <div className="App">
      <Form
        message={messageList}
        handleChangeText={setMessageList}
        setCount={setCount}
        setLastUser={setLastUser}
      />
      <Message messageListProp={messageList} />
      <button className="delButton" onClick={handleClick}>Delete chat</button>
      <p>Total {count} messages received from users</p>
    </div>
  );
};
