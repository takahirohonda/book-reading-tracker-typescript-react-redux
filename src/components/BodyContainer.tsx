import * as React from "react"

interface IBodyContainerProps {
	children? : JSX.Element[] | JSX.Element;
}

const BodyContainer = (props: IBodyContainerProps) => {

	return (
		<React.Fragment>
		<div className="container-fluid heading">
			<h1>Book Reading Tracker</h1>
		</div>

		{props.children}

		<div className="container-fluid footer"></div>
	</React.Fragment>
	)
}

export default BodyContainer