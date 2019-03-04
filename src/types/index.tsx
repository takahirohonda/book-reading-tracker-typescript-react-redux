export interface StoreState {
    book: Book
    bookList : Book[]
}

export interface Book {
    bookTitle: string;
    author: string;
    totalPage: number;
    currentPage: number;
    readingStatus: string;
}
