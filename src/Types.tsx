export interface MessageItem {
  author: string;
  text: string;
  id: number;
}

export type MessageItems = MessageItem[];
export type MessageItemsObj = {
  Chat: MessageItems
};

export interface Chats {
  name: string;
  chat: MessageItems;
}

export type ChatList = Chats[];

export interface MainProps {
  chatList: ChatList;
  setChatList: React.Dispatch<React.SetStateAction<ChatList>>;
}

export interface FormProps {
  chatId: string;
  chatList: ChatList;
  setChatList: React.Dispatch<React.SetStateAction<ChatList>>;
  setCount: any;
  setLastUser: any;
}

export interface MessageProps {
  chatId: string;
  chatList: ChatList;
}

export interface InputUserProps {
  changeUser: React.Dispatch<React.SetStateAction<string>>;
}
