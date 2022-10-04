export interface MessageItem {
  author: string;
  text: string;
  id: number;
}

export type MessageItems = MessageItem[];

export interface Chats {
  id: number;
  name: string;
  chat: MessageItems;
}

export type ChatList = Chats[];

export interface MainProps {
  chatList: ChatList;
  handleChatList: React.Dispatch<React.SetStateAction<ChatList>>;
}

export interface FormProps {
  message: MessageItems;
  handleChangeText: React.Dispatch<React.SetStateAction<MessageItems>>;
  setCount: any;
  setLastUser: any;
}

export interface MessageProps {
  messageListProp: MessageItems;
}

export interface InputUserProps {
  changeUser: React.Dispatch<React.SetStateAction<string>>;
}
