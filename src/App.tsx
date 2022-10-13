import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from './Pages/Main';
import { Profile } from './Pages/Profile';
import { ChatPage } from './Pages/ChatPage';
import { Header } from './components/Header';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { Articles } from './Pages/Articles';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            path="/Main"
            element={<Main />}
          />
          <Route path="profile" element={<Profile />} />
          <Route path="chats">
            <Route
              path=":chatId"
              element={<ChatPage />}
            />
          </Route>
          <Route path="articles" element={<Articles />} />
          <Route path="*" element={<div>404 page</div>} />
        </Route>
      </Routes>
    </Provider>
  );
};
