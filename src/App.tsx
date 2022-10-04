import { FC, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from './Pages/Main';
import { Profile } from './Pages/Profile';
import { ChatPage } from './Pages/ChatPage';
import { ChatList } from './Types';
import { Header } from './components/Header';

const defaultChatList: ChatList = [
  {
    id: 1,
    name: 'chat 1',
    chat: [],
  },
  {
    id: 2,
    name: 'chat 2',
    chat: [],
  },
  {
    id: 3,
    name: 'chat 3',
    chat: [],
  },
];

export const App: FC = () => {
  const [chatList, setChatList] = useState<ChatList>(defaultChatList);
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route
          path="/Main"
          element={<Main chatList={chatList} handleChatList={setChatList} />}
        />
        <Route path="profile" element={<Profile />} />
        <Route path="chats">
          <Route
            path=":chatId"
            element={
              <ChatPage chatList={chatList} handleChatList={setChatList} />
            }
          />
        </Route>
        <Route path="*" element={<div>404 page</div>} />
      </Route>
    </Routes>
  );
};
