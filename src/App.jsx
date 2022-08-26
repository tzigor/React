
import React from 'react';
import { useState } from "react";
import './index.css'
import { Message } from './components/Message/Message';
import { Form } from './components/Form/Form';

export function App() {
  const [message, setText] = useState('')

  return (
    <div className="App">
      <Form handleChangeText={setText} />
      <Message text={message} />
    </div>
  )
}

