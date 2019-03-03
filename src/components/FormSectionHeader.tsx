import * as React from "react"

export interface FormSectionHeaderProps { 
	headerTitle: string
}

const FormSectionHeader = ({headerTitle}: FormSectionHeaderProps) => {

	return (
		<React.Fragment>
			<h4 className="form-label-custom">{headerTitle}</h4>
			<hr className="section-label-border"/>
		</React.Fragment>
	)
}

export default FormSectionHeader