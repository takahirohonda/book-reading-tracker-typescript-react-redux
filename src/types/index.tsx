

export interface StoreState {
    book: book
    bookList : bookList
}

export interface bookList {
	bookList: Array<book>
}

export interface book {
    bookTitle: string;
    author: string;
    totalPage: number;
    currentPage: number;
    readingStatus: string;
}
