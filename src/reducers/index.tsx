import { FormAction } from '../actions';
import { StoreState, Book } from '../types/index';
import { UPDATE_FIELD, CLEAR_FIELDS, ADD_TO_LIST, REMOVE_FROM_LIST } from '../constants';
import { combineReducers } from 'redux'
import { initialState } from './initialState'
import getTimestamp from '../utils/getTimestamp'

export const formFieldUpdate = (state: Book = initialState.book, action: FormAction): Book => {
  switch (action.type) {
		case UPDATE_FIELD:
			const { field, value } = action.payload
			return { ...state, [field]: value }
		case CLEAR_FIELDS:
			return initialState.book
	}
	
	return state
}

export const bookListUpdate = (state: Book[] = initialState.bookList, action: FormAction): Book[] => {
  switch (action.type) {
		case ADD_TO_LIST:
			action.payload.updatedTimestamp = getTimestamp()
      return [ ...state, action.payload ]   
    case REMOVE_FROM_LIST:
      return state.filter((item, index) => index != action.payload)   
  }
  return state;
}

export default combineReducers({
	book: formFieldUpdate,
	bookList: bookListUpdate
})