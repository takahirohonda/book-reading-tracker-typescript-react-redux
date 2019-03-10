import { StoreState } from '../types'
import * as initialData from './initialData.json'

export const initialState: StoreState = {
  book: {
    bookTitle: '',
    author: '',
    totalPage: '',
    currentPage: '',
    readingStatus: '',
    updatedTimestamp: ''
  },
  bookList: initialData
}