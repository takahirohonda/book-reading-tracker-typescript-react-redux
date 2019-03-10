import * as React from 'react'
import { StoreState, Book } from '../types'
import { RouteComponentProps } from 'react-router-dom'
import CustomLink from './CustomLink'
import RemoveButton from './RemoveButton'

export interface Props extends RouteComponentProps {
  bookList?: StoreState["bookList"];
  onRemove?: (index: number) => void;
}

const ResultTable = ({bookList, onRemove}: Props) => {

  console.log(bookList)
  let tableRows = bookList.map((item: Book, index: number) => {
    return (
    <tbody key={index}>
      <tr className="table-data">
        <td className="book-data book-title">{item.bookTitle}</td>
        <td className="book-data book-details" data-title="Author">{item.author}</td>
        <td className="book-data book-details" data-title="Current Page">{item.currentPage}</td>
        <td className="book-data book-details" data-title="Total Page">{item.totalPage}</td>
        <td className="book-data book-details" data-title="Reading Status">{item.readingStatus}</td>
        <td className="book-data book-details delete-button-td" data-title="">
        <RemoveButton removeList={onRemove} index={index} /></td>
      </tr>
    </tbody>
    )
  })
  return (
    <div className="results-container">
      <div className="header-container">
        <h2>Reading List</h2>
        <div className="home-link">
          <CustomLink linkText="To Home" path="/" />
        </div>
      </div>

      <div className="table-container">
        <table className="result-table">
          <thead>
            <tr className="column-header">
              <th>Book Title</th>
              <th>Author</th>
              <th>Current Page</th>
              <th>Total Page</th>
              <th>Reading Status</th>
            </tr>
          </thead>
          {tableRows}
        </table>       
      </div>
    </div>
  )
}

export default ResultTable