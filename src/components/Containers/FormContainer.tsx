import Form from '../Form'
import * as actions from '../../actions'
import { StoreState, Book } from '../../types'
import { connect } from 'react-redux';
import { Dispatch } from 'redux'
import { withRouter, RouteComponentProps } from "react-router-dom";

const mapStateToProps = ({ book }: StoreState) => {
	return {
		book
	}
}

const mapDispatchToProps = (dispatch: Dispatch<actions.FormAction>) => {
	return {
		onUpdateField: (field: string, value: string) => {
      dispatch(actions.updateField(field, value))
		},
		onFormSubmit: (book: Book) => {
			dispatch(actions.AddToList(book))
			dispatch(actions.ClearFields())
		}
	}
}

const FormContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Form))

export default FormContainer





/* This doesn't work..

with Typescript, we can have Interface to define the type of the function.

export interface IMapDispatchToProps {
    onUpdateField?: (name: string, value: string) => void;
}

export interface IMapStateToProps {
	book: Book;
}

// Assigning types IMapDispatchToProps and IMapStateToProps is optional 
// but it is better for strongly typed code

const mapStateToProps = ({ book }: StoreState) : IMapStateToProps => {
	return {
		book
	}
}

const mapDispatchToProps = (dispatch: Dispatch<actions.FormAction>): IMapDispatchToProps => {
	return {
		onUpdateField: (field: string, value: string) => {
      dispatch(actions.updateField(field, value))
    }
	}
}

*/