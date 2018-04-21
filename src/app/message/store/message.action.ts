import { Action } from '@ngrx/store';
import { Message } from '../message';

export const ADD_MESSAGE = 'ADD_MESSAGES';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export class AddMessage implements Action {
  readonly type = ADD_MESSAGE;
  constructor(public payload: Message) {}
}

export class UpdateMessage implements Action {
  readonly type = UPDATE_MESSAGE;
  constructor(public payload: { target: Message; index: number }) {}
}

export class DeleteMessage implements Action {
  readonly type = DELETE_MESSAGE;
  constructor(public payload: number) {}
}

export type MessageActions = AddMessage | UpdateMessage | DeleteMessage;
