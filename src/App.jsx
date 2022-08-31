
import React from 'react';
import { useState, useEffect } from "react";
import './index.css'
import { Message } from './components/Message/Message';
import { Form } from './components/Form/Form';

export function App() {
  const [count, setCount] = useState(0);
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    console.log('messageList updated');
  }, [messageList])

  return (
    <div className="App">
      <Form message={messageList} handleChangeText={setMessageList} count={setCount} />
      <Message messageList={messageList} />
      {count}
    </div>
  )
}

