export interface MessageItem {
  author: string;
  text: string;
  id: number;
}

export type MessageItems = MessageItem[];

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
