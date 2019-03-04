import { StoreState } from '../types'

export const initialState: StoreState = {
  book: {
    bookTitle: '',
    author: '',
    totalPage: null,
    currentPage: null,
    readingStatus: ''
  },
  bookList: []
}