import ResultTable from '../ResultTable'
import * as actions from '../../actions'
import { StoreState, Book } from '../../types'
import { connect } from 'react-redux';
import { Dispatch } from 'redux'
import { withRouter, RouteComponentProps } from "react-router-dom";


const mapStateToProps = ({ bookList }: StoreState) => {
	return {bookList}
}
const mapDispatchToProps = (dispatch: Dispatch<actions.FormAction>) => {
	return {
    onRemove: (index: number) => {
      dispatch(actions.removeFromList(index))
    }
  }
}


const ResultTableContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ResultTable))

export default ResultTableContainer
