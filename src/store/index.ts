import { createStore, compose, combineReducers, Reducer } from 'redux';
import { profileReducer } from './profile/reducer';
import { ChatList } from '../Types';

type MessagesActions = AddChat | AddMessage;

export interface AddChat {
    type: string;
    name: string;
}

export interface AddMessage {
    type: string;
    indx: number;
    id: number;
    author: string;
    text: string;
}

export interface ChatListState {
    chatList: ChatList;
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
    ]
};

export const addChat = (name: string): AddChat => ({
    type: 'ADD_CHAT',
    name
});

export const addMessage = (indx: number, id: number, author: string, text: string): AddMessage => ({
    type: 'ADD_MESSAGE',
    indx: 0,
    id: 0,
    author: '',
    text: '',
});

export const reducer = (state = defaultChatList, action: MessagesActions) => {
    switch (action.type) {
        case 'ADD_CHAT': {
            return {
                ...state,
                chatList: [...state.chatList, { name: action.name, chat: [] }]
            };
        }
        case 'ADD_MESSAGE': {
            return {
                ...state,
                [action.index]: [{ chat: [] }]
            }

        }
        case 'DELETE_CHAT':
        default:
            return state
    }
};

const rootReducer = combineReducers({
    profile: profileReducer,
    store: reducer,
});

export const store = createStore(rootReducer, composeEnhancers());