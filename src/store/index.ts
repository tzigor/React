import { createStore, compose, combineReducers } from 'redux';
import { profileReducer } from './profile/reducer';
import { ChatList, MessageItem } from '../Types';

type ChatActions = AddChat | AddMessage | DelChat;

const ADD_CHAT = 'ADD_CHAT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const DEL_CHAT = 'DEL_CHAT';

export interface AddChat {
    type: typeof ADD_CHAT;
    name: string;
}

export interface DelChat {
    type: typeof DEL_CHAT;
    indx: number;
}

export interface AddMessage {
    type: typeof ADD_MESSAGE;
    indx: number;
    newMessage: MessageItem;
}

export interface ChatListState {
    chatList: ChatList;
    onChange: boolean;
    lastUser: string;
    count: number;
}

export const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const defaultChatList: ChatListState = {
    chatList: [
        {
            name: 'chat 1',
            chat: [],
        },
        {
            name: 'chat 2',
            chat: [],
        },
        {
            name: 'chat 3',
            chat: [],
        },
    ],
    onChange: true,
    lastUser: '',
    count: 0
};

export const addChat = (name: string): AddChat => ({
    type: ADD_CHAT,
    name
});

export const delChat = (indx: number): DelChat => ({
    type: DEL_CHAT,
    indx
});

export const addMessage = (indx: number, newMessage: MessageItem): AddMessage => ({
    type: ADD_MESSAGE,
    indx,
    newMessage,
});

export const reducer = (state = defaultChatList, action: ChatActions) => {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                chatList: [...state.chatList, { name: action.name, chat: [] }]
            };
        }
        case ADD_MESSAGE: {
            const chatAdded = [
                ...state.chatList[action.indx].chat,
                { author: action.newMessage.author, text: action.newMessage.text },
            ];
            const newState = state;
            newState.chatList[action.indx].chat = chatAdded;
            let inc = 0;
            if (action.newMessage.author === 'Robot') { inc = 0 }
            else { inc = 1 }
            return {
                ...state,
                chatList: newState.chatList,
                onChange: !state.onChange,
                count: state.count = state.count + inc,
                lastUser: action.newMessage.author
            }
        }
        case DEL_CHAT: {
            state.chatList.splice(action.indx, 1);
            return {
                ...state,
                onChange: !state.onChange
            };

        }
        default:
            return state
    }
};

const rootReducer = combineReducers({
    profile: profileReducer,
    main: reducer,
});

export const store = createStore(rootReducer, composeEnhancers());