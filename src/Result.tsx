import * as React from 'react'
import BodyContainer from './components/BodyContainer'
import Style from './components/Style'
import ResultTableContainer from './components/containers/ResultTableContainer'


const Result = () => {
	return (
		<React.Fragment>
				<Style />
				<BodyContainer>
						<ResultTableContainer />
				</BodyContainer>
		</React.Fragment>
	)
}

export default Result

/* Reference

How to fix the error: TS2741: Property 'bookList' is missing in type '{}' but required in type 'Readonly<PropsWithChildren<Pick<Props, "bookList">>>'.

Adding ? to bookList in Props interface.
 initializing it as <App /> in ReactDOM.render(<App />, document.getElementById('main')); without the properties. 
 This is TypeScript providing you with errors about what you said was the intented use.
 It's an error like having a function with arguments but calling it without passing any.

export interface Props {
	bookList?: StoreState["bookList"]
}

*/
