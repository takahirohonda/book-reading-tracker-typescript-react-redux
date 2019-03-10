import * as React from 'react'
import FormSectionHeader from './FormSectionHeader'
import { Book } from '../types'
import { RouteComponentProps } from "react-router-dom";

export interface Props extends RouteComponentProps {
	onUpdateField?: (name: string, value: string) => void;
	onFormSubmit?: (book: Book) => void;
	book: Book;
}
const Form = ({ onUpdateField, onFormSubmit, book, history}: Props) => {
  return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 offset-lg-3">
						<form onSubmit={e => {e.preventDefault(); onFormSubmit(book); history.push('./result')}}>

							<FormSectionHeader headerTitle="Book Title"/>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Book Title</label>
								<input type="text" className="form-control input-field" id="bookTitle" name="bookTitle" placeholder="Enter book title..." 
									value={book.bookTitle}
									onChange={ e => onUpdateField(e.target.name, e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">Author</label>
								<input type="text" className="form-control input-field" id="author" name="author" placeholder="Enter author..." 
									value={book.author}
									onChange={ e => onUpdateField(e.target.name, e.target.value)}
								/>
							</div>

							<FormSectionHeader headerTitle="Page Tracker"/>
							<div className="row">
								<div className="col">
									<input type="text" className="form-control input-field" name="totalPage" placeholder="Total Page..." 
										value={book.totalPage}
										onChange={ e => onUpdateField(e.target.name, e.target.value)}
									/>
								</div>
								<div className="col">
									<input type="text" className="form-control input-field" name="currentPage" placeholder="Current Page..." 
										value={book.currentPage}
										onChange = { e => onUpdateField(e.target.name, e.target.value)}
									/>
								</div>
							</div>

							<FormSectionHeader headerTitle="Reading Status"/>

							<div className="radio-container">
								<div className="radio-button">
									<input type="radio" className="radio-input" id="toRead" name="readingStatus" value="To Read" 
										checked={book.readingStatus == "To Read"}
										onChange = { e => onUpdateField(e.target.name, e.target.value)}
									/>
									<label className="radio-label" htmlFor="toRead">
										<div className="radio-label-content">To Read</div>      
									</label>
								</div>
								<div className="radio-button">       
									<input type="radio" className="radio-input" id="reading" name="readingStatus" value="reading"
										checked={book.readingStatus == "reading"}
										onChange = { e => onUpdateField(e.target.name, e.target.value)}
									/>
									<label className="radio-label" htmlFor="reading">Reading</label>
								</div>
								<div className="radio-button"> 
									<input type="radio" className="radio-input" id="completed" name="readingStatus" value="completed"
										checked={book.readingStatus == "completed"}
										onChange = { e => onUpdateField(e.target.name, e.target.value)}
									/>
									<label className="radio-label" htmlFor="completed">Completed</label>
								</div>
							</div>

							<button type="submit" className="btn btn-custom submit-button">Submit</button>

						</form>
					</div>
				</div>
			</div>
		</React.Fragment>
  )
}

export default Form