import * as React from 'react'
import BodyContainer from './components/BodyContainer'
import Style from './components/Style'
import FormContainer from './components/containers/FormContainer'


const App = () => {
	return (
		<React.Fragment>
				<Style />
				<BodyContainer>
						<FormContainer />
				</BodyContainer>
		</React.Fragment>
	)
}

export default App
