export interface StoreState {
  book: Book
  bookList : Book[]
}

export interface Book {
  bookTitle: string;
  author: string;
  totalPage: string;
  currentPage: string;
  readingStatus: string;
  updatedTimestamp: string;
}
