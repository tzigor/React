import './Message.css';
import { MessageProps, MessageItem } from '../../Types';

export const Message = ({ chatId, chatList }: MessageProps) => {

  let messageStyle = '';
  return (
    <div data-testid="messageBox" className="messageBox">
      {chatList[Number(chatId) - 1].chat.map((item: MessageItem, index: number) => {
        if (item.author === 'Robot') messageStyle = 'robotMessage';
        else messageStyle = 'message';
        return (
          <div className={messageStyle} key={index}>
            <p className="userStyle">{item.author}:</p>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};
