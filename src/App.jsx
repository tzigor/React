import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './index.css';
import { Message } from './components/Message/Message';
import { Form } from './components/Form/Form';
import { randomMessage } from './Utils';

export function App() {
  const [count, setCount] = useState(0);
  const [messageList, setMessageList] = useState([]);
  const [lastUser, setLastUser] = useState('');

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const timeout = setTimeout(() => {
      const updateMessage = [
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

  return (
    <div className="App">
      <Form
        message={messageList}
        handleChangeText={setMessageList}
        setCount={setCount}
        setLastUser={setLastUser}
      />
      <Message messageList={messageList} />
      <p>Total {count} messages received from users</p>
    </div>
  );
}
