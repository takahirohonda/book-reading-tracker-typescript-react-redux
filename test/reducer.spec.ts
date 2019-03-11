// reference: https://github.com/piotrwitek/react-redux-typescript-guide#testing-reducer

import{ expect } from 'chai'
import reducer from '../src/reducers'
import { initialState } from '../src/reducers/initialState'

import * as C from '../src//constants'

describe('Reducer Test', () => {
  
    it('should add value to state on UPDATE_FIELD: action', () => {
        const action = {
          type: C.UPDATE_FIELD,
          payload: {field: 'bookTitle', value: 'mockTitle'}
        }
        const state = reducer(initialState, action)
        expect(state.book.bookTitle).to.equal('mockTitle')
    })

    it('should clear values in state.book on CLEAR_FIELDS action', () => {

      const mockBook = {
        'bookTitle': 'mock',
        'author': 'mochAuthor',
        'totalPage': '10',
        'currentPage': '10',
        'readingStatus': 'reading',
        'updatedTimestamp': '2019-02-02 00:00:00'
      }

      const expectedAfterClear = {
        'bookTitle': '',
        'author': '',
        'totalPage': '',
        'currentPage': '',
        'readingStatus': '',
        'updatedTimestamp': '',
      }

      const stateWithBookValues = { ...initialState, book: mockBook }
      const action = {
        type: C.CLEAR_FIELDS,
        payload: {field: 'bookTitle', value: 'mockTitle'}
      }
      const state = reducer(stateWithBookValues, action)
      expect(state.book).to.deep.equal(expectedAfterClear)
  })

  it('should update bookList on ADD_TO_LIST action', () => {

    const mockBook = {
      'bookTitle': 'mock',
      'author': 'mochAuthor',
      'totalPage': '10',
      'currentPage': '10',
      'readingStatus': 'reading',
    }

    const expectedAfterAdd = {
      'bookTitle': 'mock',
      'author': 'mochAuthor',
      'totalPage': '10',
      'currentPage': '10',
      'readingStatus': 'reading',
    }
    const filteredBookList = initialState.bookList.filter((item => item.bookTitle ==''))

    const stateWithBookValues = { ...initialState, bookList: filteredBookList }
    const action = {
      type: C.ADD_TO_LIST,
      payload: mockBook
    }
    const state = reducer(stateWithBookValues, action)
    delete state.bookList[0].updatedTimestamp
    expect(state.bookList[0]).to.deep.equal(expectedAfterAdd)
  })

  it('should remove a record from bookList on REMOVE_FROM_LIST action', () => {
    const action = {
      type: C.REMOVE_FROM_LIST,
      payload: 0
    }
    const state = reducer(initialState, action)
    expect(state.bookList.length).to.equal(4)

  })



})