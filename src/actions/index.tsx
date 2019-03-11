import * as C from '../constants'

import { Book } from '../types';

// This const/type pattern allows us to use TypeScript's string literal types in an easily accessible and refactorable way.

export interface UpdateField {
    type: C.UPDATE_FIELD
    payload: {
    	field: string
			value: string
    }
}

export interface ClearFields {
    type: C.CLEAR_FIELDS
}

export interface AddToList {
    type: C.ADD_TO_LIST
    payload: Book
}

export interface RemoveFromList {
    type: C.REMOVE_FROM_LIST
    payload: number
}

export type FormAction = UpdateField | AddToList | RemoveFromList | ClearFields

export function updateField(field: string, value: string): UpdateField {
  return {
    type: C.UPDATE_FIELD,
    payload : {field, value}
  }
}

export function AddToList(book: Book): AddToList {
  return {
    type: C.ADD_TO_LIST,
    payload: book
  }
}

export function ClearFields(): ClearFields {
  return {
    type: C.CLEAR_FIELDS
  }
}

export function removeFromList(index: number): RemoveFromList {
  return {
    type: C.REMOVE_FROM_LIST,
    payload: index
  }
}