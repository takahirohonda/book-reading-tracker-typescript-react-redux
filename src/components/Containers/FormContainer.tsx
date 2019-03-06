import Form from '../Form'
import * as actions from '../../actions'
import { StoreState, Book } from '../../types'
import { connect } from 'react-redux';
import { Dispatch } from 'redux'

export interface IMapDispatchToProps {
    onUpdateField?: (name: string, value: string) => void;
}

export interface IMapStateToProps {
	bookTitle: string;
}

// Assigning types IMapDispatchToProps and IMapStateToProps is optional 
// but it is better for strongly typed code

const mapStateToProps = ({ book }: StoreState): IMapStateToProps => {
	return {
		bookTitle: book.bookTitle
	}
}

const mapDispatchToProps = (dispatch: Dispatch<actions.FormAction>): IMapDispatchToProps => {
	return {
		onUpdateField: (field: string, value: string) => {
      dispatch(actions.updateField(field, value))
    }
	}
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form)

export default FormContainer