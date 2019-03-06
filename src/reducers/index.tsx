import { FormAction } from '../actions';
import { StoreState, Book } from '../types/index';
import { UPDATE_FIELD, ADD_TO_LIST, REMOVE_FROM_LIST } from '../constants/index';
import { combineReducers } from 'redux'
import { initialState } from './initialState'

export const formFieldUpdate = (state: Book = initialState.book, action: FormAction): Book => {
  switch (action.type) {

		case UPDATE_FIELD:
			const { field, value } = action.payload
			return { ...state, [field]: value }
	}
	
	return state
}

export const readingListUpdate = (state: Book[] = initialState.bookList, action: FormAction): Book[] => {
  switch (action.type) {

		case ADD_TO_LIST:
		
      return [ ...state, action.payload ]
    
    case REMOVE_FROM_LIST:
      return state
    
  }
  return state;
}

export default combineReducers({
	book: formFieldUpdate,
	readingList: readingListUpdate
})