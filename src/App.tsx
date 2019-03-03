import * as React from 'react'
import BodyContainer from './components/BodyContainer'
import Style from './components/Style'
import Form from './components/Form'


const App = () => {
	return (
		<React.Fragment>
				<Style />
				<BodyContainer>
						<Form />
				</BodyContainer>
		</React.Fragment>
	)
}

export default App
