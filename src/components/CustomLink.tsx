import * as React from 'react'
import { withRouter, RouteComponentProps, Link } from "react-router-dom";

export interface Props {
	linkText: string;
	path: string;
}

const CustomLink = ({ linkText, path }: Props) => (
<Link to={path}>{linkText}</Link>
)

export default CustomLink