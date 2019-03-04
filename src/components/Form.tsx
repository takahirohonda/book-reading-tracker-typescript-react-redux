import * as React from 'react'
import FormSectionHeader from './FormSectionHeader'
import { IMapDispatchToProps, IMapStateToProps } from './Containers/FormContainer'

const Form = ( {onUpdateField }: IMapDispatchToProps, { book }: IMapStateToProps) => {

  return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-md-6 offset-md-3">
						<form>

							<FormSectionHeader headerTitle="Book Title"/>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Book Title</label>
								<input type="text" className="form-control input-field" id="bookTitle" name="bookTitle" value={book.bookTitle} placeholder="Enter book title..." 
									onChange={ e => onUpdateField(e.target.name, e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">Author</label>
								<input type="text" className="form-control input-field" id="author" placeholder="Enter author..." />
							</div>

							<FormSectionHeader headerTitle="Book Title"/>
							<div className="row">
								<div className="col">
									<input type="text" className="form-control input-field" name="totalPage" placeholder="Total Page..." />
								</div>
								<div className="col">
									<input type="text" className="form-control input-field" name="currentPage" placeholder="Current Page..." />
								</div>
							</div>

							<FormSectionHeader headerTitle="Reading Status"/>

							<div className="form-check">
								<input className="form-check-input" type="radio" name="readingStatus" id="readingStatus" value="toRead" />
								<label className="form-check-label" htmlFor="readingStatus">
									To Read
								</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="radio" name="readingStatus" id="readingStatus" value="reading" />
								<label className="form-check-label" htmlFor="readingStatus">
									Reading
								</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="radio" name="readingStatus" id="readingStatus" value="completed" />
								<label className="form-check-label" htmlFor="readingStatus">
									Completed
								</label>
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