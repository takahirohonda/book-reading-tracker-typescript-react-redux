// reference: https://redux.js.org/recipes/writing-tests

import { expect } from 'chai'
import * as actions from '../src/actions'
import { UPDATE_FIELD, CLEAR_FIELDS, ADD_TO_LIST, REMOVE_FROM_LIST } from '../src/constants';

describe('Action Test', () => {
  it('should create an action to update field', () => {
    const formValue = {field: 'bookTitle', value: 'mockTitle'}
    const expected = {
      type: UPDATE_FIELD,
      payload: formValue
    }
    expect(actions.updateField('bookTitle', 'mockTitle')).to.deep.equal(expected)
  })

  it('should create an action to add bokk to bookList', () => {
    const mockBook = {
      'bookTitle': 'mock',
      'author': 'mochAuthor',
      'totalPage': '10',
      'currentPage': '10',
      'readingStatus': 'reading',
      'updatedTimestamp': '2019-01-01 00:00:00'
    }
    const expected = {
      type: ADD_TO_LIST,
      payload: mockBook
    }
    expect(actions.AddToList(mockBook)).to.deep.equal(expected)
  })

  it('should create an action to clear field', () => {

    const expected = {
      type: CLEAR_FIELDS
    }
    expect(actions.ClearFields()).to.deep.equal(expected)
  })

  it('should create an action to remove a record from bookList', () => {
    const expected = {
      type: REMOVE_FROM_LIST,
      payload: 1
    }
    expect(actions.removeFromList(1)).to.deep.equal(expected)
  })
})