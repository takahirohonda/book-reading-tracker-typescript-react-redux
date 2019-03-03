import Form from '../Form'
import * as actions from '../../actions'
import { StoreState, book, bookList } from '../../types'
import { connect } from 'react-redux';
import { Dispatch } from 'redux'

export interface Props {
    onUpdateField?: (name: string, value: string) => void;
}

const mapStateToProps = ({book}: StoreState)  => {
	return {
		book: book
	}
}


const mapDispatchToProps = (dispatch: Dispatch<actions.FormAction>) => {
	return {
		updateFieldOnChange: (field: string, value: string) => {
            dispatch(actions.updateField(field, value))
            console.log(value)
        }
	}
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form)

export default FormContainer