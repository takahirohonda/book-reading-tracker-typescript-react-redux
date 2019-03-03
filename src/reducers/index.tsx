import { FormAction } from '../actions';
import { StoreState, book, bookList } from '../types/index';
import { UPDATE_FIELD, ADD_TO_LIST, REMOVE_FROM_LIST } from '../constants/index';
import { combineReducers } from 'redux'

export const formFieldUpdate = (state: book, action: FormAction): book => {
  switch (action.type) {

		case UPDATE_FIELD:
			const { field, value } = action.payload
			return { ...state, [field]: value }
	}
	
	return state
}

export const readingListUpdate = (state: bookList, action: FormAction): bookList => {
  switch (action.type) {

		case ADD_TO_LIST:
			return state
      // return { ...state, action.payload }
    
    case REMOVE_FROM_LIST:
      return state
    
  }
  return state;
}


export default combineReducers({
	formFieldUpdate,
	readingListUpdate
})