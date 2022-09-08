import './Message.css';
import { MessageProps } from '../../Types';

export const Message = ({ messageListProp }: MessageProps) => {
  let messageStyle = '';
  return (
    <>
      <div data-testid="messageBox" className="messageBox">
        {messageListProp.map((item) => {
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
    </>
  );
};
