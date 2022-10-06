import './Message.css';
import { MessageProps, MessageItem } from '../../Types';
import { useDispatch, useSelector } from 'react-redux';
import { ChatListState } from '../../store/index';

export const Message = ({ chatId, chatList }: MessageProps) => {
  const dispatch = useDispatch();
  const chatListState = useSelector((state: ChatListState) => state.store.chatList);
  console.log(chatListState);

  let messageStyle = '';
  return (
    <div data-testid="messageBox" className="messageBox">
      {chatListState[Number(chatId) - 1].chat.map((item: MessageItem) => {
        if (item.author === 'Robot') messageStyle = 'robotMessage';
        else messageStyle = 'message';
        return (
          <div className={messageStyle} key={item.id}>
            <p className="userStyle">{item.author}:</p>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};
