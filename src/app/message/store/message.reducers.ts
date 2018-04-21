import * as MessageActions from './message.action';
import { MessageState } from './message.store';
import { Message } from '../message';

export const initState: MessageState = {
  messages: [new Message('aaa', 'bbb')]
};

export function messageReducer(
  state: MessageState = initState,
  action: MessageActions.MessageActions
) {
  switch (action.type) {
    case MessageActions.ADD_MESSAGE:
      // add new message to the end of the array
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    case MessageActions.UPDATE_MESSAGE:
      // copy the list, and update target message
      // payload: {message: updatedMessage, index: target index}
      const updatedMessage = action.payload.target;
      const newList = [...state.messages];
      newList[action.payload.index] = updatedMessage;

      return {
        ...state,
        messages: newList
      };
    case MessageActions.DELETE_MESSAGE:
      // payload: the index of delete message
      return {
        ...state,
        messages: [...state.messages].splice(action.payload)
      };
    default:
      return state;
  }
}
